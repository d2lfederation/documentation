var fs = require('fs'),
	path = require('path');

function writeRedirectFile(filePath, url) {
	return new Promise(function(resolve, reject) {
		var writer = fs.createWriteStream(filePath);
		writer.on('finish', resolve);
		writer.write('<!doctype html><head><title>Brightspace UI</title><meta http-equiv="refresh" content="0;URL=\'' + url + '\'" /></head></html>');
		writer.end();
	});
}

module.exports = function(client, prefix) {
	var filePath = path.join(__dirname, '../', '_tmp', 'index.html');
	return writeRedirectFile(filePath, '/' + prefix + '/')
		.then(function() {
			return new Promise(function(resolve, reject) {
				var emitter = client.uploadFile({
					localFile: filePath,
					s3Params: {
						Bucket: 'brightspace-ui-docs',
						Key: 'index.html',
						ACL: 'public-read',
						CacheControl: 'no-cache'
					}
				});
				emitter.on('error', reject);
				emitter.on('end', resolve);
			});
		});
};
