---
title: Page Load Progress
permalink: /components/page-load-progress/
layout: component
github: BrightspaceUI/page-load-progress
bower: d2l-page-load-progress
custom_js: page-load-progress
---
The page-load-progress component is a load progress indicator. Once initialized, it will move quickly at first, then load progressively slower until told to finish.

To create a page-load-progress component, use the `d2l-page-load-progress` element.

{% example %}
<d2l-page-load-progress></d2l-page-load-progress>
{% endexample %}

## Auto start
The `d2l-page-load-progress` can be started automatically by including the autostart attribute.

{% example %}
<d2l-page-load-progress autostart></d2l-page-load-progress>
{% endexample %}

## Custom Color or Size

The `d2l-page-load-progress` style can be customized by specifying a `color` attributes on the element.

{% example %}
<d2l-page-load-progress autostart color="#e57231"></d2l-page-load-progress>
{% endexample %}

## Starting and finishing
Progress can be started, restarted and finished using JavaScript API's start() and finish() methods. Make sure the WebComponentsReady event has been raised before interacting with it.

{% highlight javascript %}
window.addEventListener('WebComponentsReady', function() {

	var timerprogress = document.getElementById('timerprogress');
	timerprogress.start();

	// take 2 seconds to "load"
	setTimeout(function() {
		timerprogress.finish();
	}, 2000);

});
{% endhighlight %}

{% example %}
<d2l-page-load-progress id="timerprogress" color="#e57231"></d2l-page-load-progress>
{% endexample %}

Anything that can call the javascript api can call start or finish, including buttons.

{% highlight javascript %}
window.addEventListener('WebComponentsReady', function() {

  var progress = document.getElementById('progress');

  var startbuttonprogress = document.getElementById('startprogress');
  startbuttonprogress.addEventListener("click", function(){progress.start();});

  var finishbuttonprogress = document.getElementById('finishprogress');
  finishbuttonprogress.addEventListener("click", function(){progress.finish();});
});
{% endhighlight %}

{% example %}
<d2l-page-load-progress id="progress" color="#e57231"></d2l-page-load-progress>
<button is="d2l-button" id="startprogress">Start</button> <button is="d2l-button" id="finishprogress">Finish</button>
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
