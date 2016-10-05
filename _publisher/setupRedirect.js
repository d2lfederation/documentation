module.exports = function(client, prefix) {
	return new Promise(function(resolve, reject) {
		var emitter = client.copyObject({
			Bucket: 'brightspace-ui-docs',
			Key: 'index.html',
			CopySource: 'brightspace-ui-docs/index.html',
			ACL: 'public-read',
			ContentType: 'text/html',
			MetadataDirective: 'REPLACE',
			WebsiteRedirectLocation: '/' + prefix
		});
		emitter.on('error', reject);
		emitter.on('end', resolve);
	});
};
