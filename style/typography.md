---
title: Typography
permalink: /style/typography/
layout: component
bower: d2l-typography
github: BrightspaceUI/typography
---
Brightspace UI typography styles can be applied to the various types of textual elements using CSS classes.

## Base Typography

The base font properties are set up by applying the `d2l-typography` CSS class to the `<body>` element:

{% example demo: false %}
<body class="d2l-typography">
	...
</body>
{% endexample %}

This will set the font family, color, line-height and character spacing.

{% example %}
<p>
  Grumpy wizards make toxic brew for the evil Queen and Jack.
</p>
{% endexample %}

### Base Font Size

Within Brightspace, the user can configure the size of font from one of four values. If your application exists outside of Brightspace, set the desired font size on the `<html>` element. All other font sizes will be multiples of that value.

The recommended base font size is `20px`:

{% example type: css %}
html {
	font-size: 20px;
}
{% endexample %}

## Compact Body

The compact body class is a smaller version of the default body class, for use in areas that prefer to be conservative with the amount of real estate used by text.

The compact style is not recommended for blocks of readable text, particularly in paragraph form. Rather, it is best employed for brief informative text or calls to action.

Use the `d2l-body-compact` CSS class on any container:

{% example %}
<div class="d2l-body-compact">
  Compact example
</div>
{% endexample %}

## Headings

There are four separate CSS classes available for heading elements. These can be applied to any heading element (`<h1>` - `<h6>`) to achieve the desired look while maintaining [proper semantic structure](http://webaim.org/techniques/semanticstructure/).

{% a11y Heading Structure %}
Headings add semantic structure to your document, so make sure you nest headings properly and avoid skipping levels.

{% wcag level: "a", url: "https://www.w3.org/TR/WCAG20-TECHS/H42.html" %}
H42: Using h1-h6 to identify headings
{% endwcag %}

{% wcag level: "a", url: "https://www.w3.org/TR/WCAG20-TECHS/G141.html" %}
G141: Organizing a page using headings
{% endwcag %}
{% enda11y %}

{% example %}
<h1 class="d2l-heading-1">Heading 1</h1>
<h2 class="d2l-heading-1">Heading 2</h2>
<h3 class="d2l-heading-1">Heading 3</h3>
<h4 class="d2l-heading-1">Heading 4</h4>
{% endexample %}

{% a11y Heading Text %}
Provide descriptive headings which give an overview of the content they encompass.

{% wcag level: "aa", url: "https://www.w3.org/TR/WCAG20-TECHS/G130.html" %}
G130: Provide descriptive headings
{% endwcag %}
{% enda11y %}

## Localized Fonts

Most web fonts -- including the Brightspace UI font [Lato](http://www.latofonts.com/) -- don't contain all the glyphs needed for languages which use non-Latin characters. To ensure characters in all languages display correctly, Brightspace UI typography will adapt its font usage based on the detected language.

{% example %}
<!-- Korean -->
<p lang="ko">심술 마법사</p>
{% endexample %}

## Readability

For readers who prefer a font intended for dyslexia, the [Open Dyslexic](http://opendyslexic.org/) font can be applied using the `d2l-dyslexic` class. This will be done automatically within Brightspace based on the "readability" preference in account settings.

{% example %}
<p class="d2l-dyslexic">
  Grumpy wizards make toxic brew for the evil Queen and Jack.
</p>
{% endexample %}

## Developing with Typography

{% include bower.html name=page.bower %}

Import `d2l-typography.html`, then include `d2l-typography` in a `custom-style` block to add the CSS classes to the page:

{% example, demo: false %}
<link
  rel="import"
  href="bower_components/d2l-typography/d2l-typography.html">
<style is="custom-style" include="d2l-typography"></style>
{% endexample %}

{% include github.html name=page.github %}
