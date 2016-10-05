var s3 = require('s3'),
	setupRedirect = require('./setupRedirect'),
	uploadSite = require('./uploadSite');

var isTagged = false;
var tag = process.env['TRAVIS_TAG'];
var pr = process.env['TRAVIS_PULL_REQUEST'];
var prefix = '';
if (tag !== undefined && tag !== '') {
	isTagged = true;
	prefix = tag;
} else if(pr !== undefined && pr !== false && pr !== '' && pr !== 'false') {
	prefix = 'pr/' + pr;
}
if (prefix.length === 0) {
	console.log('Not a tagged commit or a pull request, skipping deployment.');
	return process.exit(0);
}

var client = s3.createClient({
	s3Options: {
		accessKeyId: process.env['AMAZON_ACCESS_KEY_ID'],
		secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY']
	}
});

console.log('Publishing to S3...');
console.log('\tBucket: brightspace-ui-docs');
console.log('\tPrefix: ' + prefix );
console.log('\tTagged: ' + isTagged);

uploadSite(client, prefix, isTagged)
	.then(function() {
		if (isTagged) {
			console.log('\tRedirect Setup...');
			return setupRedirect(client, prefix);
		} else {
			console.log('\tNot a tagged commit, skipping redirect setup');
		}
	}).then(function() {
		console.log('Publish to S3 complete: http://brightspace-ui-docs.s3-website-us-east-1.amazonaws.com/' + prefix + '/');
		process.exit(0);
	}).catch(function(err) {
		console.error(err);
		process.exit(1);
	});
