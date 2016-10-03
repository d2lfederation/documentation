---
title: Links
layout: component
github: Brightspace/d2l-link-ui
bower: d2l-link
---
A link is a hyperlink from one page to another.

To create a Brightspace UI-styled link, extend the native HTML anchor (`<a>`) element with the `is="d2l-link"` custom element.

{% example %}
<a is="d2l-link">Normal Link</a>
{% endexample %}

{% a11y Provide Descriptive Link Text %}
Describe the purpose of the link as the content of the `<a>` element. This ensures the user can uniquely distinguish each link from the others on the page. Avoid ambiguous link text such as "click here".

{%wcag level: "a", url: "https://www.w3.org/TR/WCAG20-TECHS/H30.html" %}
H30: Providing link text that describes the purpose of a link for anchor elements
{% endwcag %}
{% enda11y %}

## Main Links

For links which require more emphasis, add the `main` attribute:

{% example %}
<a is="d2l-link" main>Main Link</a>
{% endexample %}

## Small Links

To create a link with a smaller font-size, add the `small` attribute:

{% example %}
<a is="d2l-link" small>Small Link</a>
{% endexample %}

## Developing with Links

{% include bower.html name=page.bower %}

Then import `d2l-link.html`:

{% example, demo: false %}
<link
  rel="import"
  href="bower_components/d2l-link/d2l-link.html">
{% endexample %}

{% include github.html name=page.github %}
