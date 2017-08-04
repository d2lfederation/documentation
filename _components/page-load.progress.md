---
title: Page Load Progress
permalink: /components/page-load-progress/
layout: component
github: BrightspaceUI/page-load-progress
bower: d2l-page-load-progress
---
The page-load-progress component wraps up all the elements and styles needed.

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

## Developing with Page Load Progress

{% include bower.html name=page.bower %}

Then import the components you need:

{% example, demo: false %}
<!-- for a loading spinner -->
<link
  rel="import"
  href="bower_components/d2l-page-load-progress/d2l-page-load-progress.html">
{% endexample %}

{% include github.html name=page.github %}
