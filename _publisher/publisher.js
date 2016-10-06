var s3 = require('s3'),
	uploadSite = require('./uploadSite');

var isTagged = false;
var tag = process.env['TRAVIS_TAG'];
var pr = process.env['TRAVIS_PULL_REQUEST'];
var prefix = '';
var bucket = 'brightspace-ui-docs';
var host = 'http://brightspace-ui-docs.s3-website-us-east-1.amazonaws.com/';
if (tag !== undefined && tag !== '') {
	isTagged = true;
} else if(pr !== undefined && pr !== false && pr !== '' && pr !== 'false') {
	bucket = 'brightspace-ui-docs-dev';
	prefix = 'pr/' + pr;
	host = 'http://brightspace-ui-docs-dev.s3-website-us-east-1.amazonaws.com/'
} else {
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
console.log('\tBucket: ' + bucket);
console.log('\tPrefix: ' + prefix );
console.log('\tTagged: ' + isTagged);

uploadSite(client, bucket, prefix, isTagged)
	.then(function() {
		console.log('Publish to S3 complete: ' + host + prefix + '/');
		process.exit(0);
	}).catch(function(err) {
		console.error(err);
		process.exit(1);
	});
