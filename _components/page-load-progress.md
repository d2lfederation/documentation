---
title: Page Load Progress
permalink: /components/page-load-progress/
layout: component
github: BrightspaceUI/page-load-progress
bower: d2l-page-load-progress
---
The page-load-progress component is a load progress indicator. Once initialized, it will move quickly at first, then load progressively slower until told to finish.

To create a page-load-progress component, use the `<d2l-page-load-progress>` element.

To start automatically, include the `autostart` attribute.

{% example %}
<d2l-page-load-progress autostart></d2l-page-load-progress>
{% endexample %}

## Custom Color or Size

The `d2l-page-load-progress` style can be customized by specifying a `color` attribute on the element.

{% example %}
<d2l-page-load-progress autostart color="#e57231"></d2l-page-load-progress>
{% endexample %}

## Starting and finishing

Progress can be started, restarted and finished using the JavaScript API's `start()` and `finish()` methods. Make sure the `WebComponentsReady` event has fired before interacting with the API.

{% example %}
<d2l-page-load-progress id="example"></d2l-page-load-progress><br>
<button is="d2l-button" id="start">Start</button>
<button is="d2l-button" id="finish">Finish</button>
<script>
window.addEventListener('WebComponentsReady', function() {
	var example = document.getElementById('example');
	document.getElementById('start')
		.addEventListener('click', function() { example.start(); });
	document.getElementById('finish')
		.addEventListener('click', function() { example.finish(); });
});
</script>
{% endexample %}

## Developing with Page Load Progress

{% include bower.html name=page.bower %}

Then import the components you need:

{% example, demo: false %}
<link
  rel="import"
  href="bower_components/d2l-page-load-progress/d2l-page-load-progress.html">
{% endexample %}

{% include github.html name=page.github %}
