module.exports = function(client, bucket, prefix, isTagged) {
	return new Promise(function(resolve, reject) {

		console.log('\tUploading...');

		var anyFiles = false;
		var cache = isTagged ? 'public, max-age=1800' : 'no-cache';

		var emitter = client.uploadDir({
			localDir: '_site',
			deleteRemoved: true,
			s3Params: {
				Bucket: bucket,
				Prefix: prefix,
				ACL: 'public-read',
				CacheControl: cache
			}
		});
		emitter.on('fileUploadEnd', function(localKey) {
			anyFiles = true;
			console.log('\t\t' + localKey);
		});
		emitter.on('error', reject);
		emitter.on('end', function() {
			if (!anyFiles) {
				console.log('\t\tAll files are already present');
			}
			resolve();
		});

	});
}
