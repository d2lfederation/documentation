---
title: Loading Spinner
permalink: /components/loading-spinner/
layout: component
github: BrightspaceUI/loading-spinner
bower: d2l-loading-spinner
---
The loading-spinner component wraps up all the elements and styles needed.

To create a loading-spinner, use the `d2l-loading-spinner` element.

{% example %}
<d2l-loading-spinner></d2l-loading-spinner>
{% endexample %}

## Custom Color or Size

The `d2l-loading-spinner` style can be customized by specifying a `color` and/or `size` attributes on the element. Alternatively, the color and size can be customized using the `--d2l-loading-spinner-color` and/or `--d2l-loading-spinner-size` CSS properties.

{% example %}
<d2l-loading-spinner color="#e57231" size="30"></d2l-loading-spinner>
<d2l-loading-spinner color="#e57231" size="50"></d2l-loading-spinner>
<d2l-loading-spinner color="#e57231" size="100"></d2l-loading-spinner>
{% endexample %}

## Developing with Loading Spinners

{% include bower.html name=page.bower %}

Then import the components you need:

{% example, demo: false %}
<!-- for a loading spinner -->
<link
  rel="import"
  href="bower_components/d2l-loading-spinner/d2l-loading-spinner.html">
{% endexample %}

{% include github.html name=page.github %}
