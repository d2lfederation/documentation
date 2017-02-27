---
title: Color
permalink: /style/color/
layout: component
bower: d2l-colors
github: BrightspaceUI/colors
---
## Color Palette

The established color palette is meant to reflect the Brightspace UI Design Principles while simultaneously aligning the digital product experience with the recent Brightspace brand. By combining a light and muted backdrop with small, yet bold instances of color, the palette is able to:
1. Set the foundation for the open, friendly, and easy to use tone of the interface; and
2. Translate and adapt the Brightspace brand for the core desktop browser and mobile products.

### Primary

It is recommended that primary colors (and variations thereof) should be used for constructing foundational page elements. Page structures such as dividers, backdrops, and containers should be created with these colors in mind. Some common elements also fall within this category.

{% for color in site.data.colors.primary %}
{% include paint-chip.html color=color %}
{% endfor %}

### Secondary

It is recommended that secondary colors be reserved for opportunities to showcase movement and draw the user's attention. The colors are brighter and more vivid, pulling from the Brightspace brand.

They should be used sparingly so as not to reduce their impact. Interface elements such as notifications, data visualizations, or marketing and promotional items are ideal places to make use of the secondary color palette.

{% for color in site.data.colors.secondary %}
{% include paint-chip.html color=color %}
{% endfor %}

### Grey

{% for color in site.data.colors.grey %}
{% include paint-chip.html color=color %}
{% endfor %}

### Tonal Contouring

Several elements throughout the Arena design language use a two-tone approach to enhancing structure and definition. In these instances, the primary colour is used as a stroke colour with a lighter version of that same tone used as a fill colour.

{% for color in site.data.colors.tonal %}
{% include paint-chip.html color=color %}
{% endfor %}

## Accessibility

### Color Contrast

When choosing colors for your application, always ensure that there is sufficient contrast between the foreground and background colors. To meet WCAG 2.0 Level AA, text should have a contrast ratio of at least `4.5:1` with its background. Larger text should have a ratio of `3:1`.

{% wcag level: "aa", url: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" %}
SC 1.4.3: Understanding Minimum Color Contrast
{% endwcag %}

For help with checking contrast, use a [color contrast analyzer](http://webaim.org/resources/contrastchecker/) tool or [plugin to Chrome](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/accessibility-evaluation-toolb/).

### Use of Color

Color should also never be used on its own to convey meaning or information.

{% wcag level: "a", url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html" %}
WC 1.4.1: Understanding Use of Color
{% endwcag %}

## Developing with Colors

{% include bower.html name=page.bower %}

### Polymer Web Component Variables

Each of the colors in the Brightspace UI palette are exposed as Polymer variables.

To use them, import `d2l-colors.html` and use a `custom-style` block:

{% example, demo: false %}
<head>
  <link
    rel="import"
    href="bower_components/d2l-colors/d2l-colors.html">
  <style is="custom-style">
    div {
      background-color: var(--d2l-color-saphirella);
    }
  </style>
</head>
{% endexample %}

{% note %}
Inside web components, the `custom-style` block can be omitted.
{% endnote %}

Each color's variable name will be in the form: `--d2l-color-<name>`. The complete list of variable names can be found [in the source code](https://github.com/Brightspace/d2l-colors-ui/blob/master/d2l-colors.html).

Additional documentation about [Polymer Shared Style Modules](https://www.polymer-project.org/1.0/docs/devguide/styling#style-modules)...

### Sass Variables

Alternatively, if you prefer [Sass](http://sass-lang.com/), you can reference the same variables, all in the form `$d2l-color-<name>`:

{% example, type: scss %}
@import 'bower_components/d2l-colors/d2l-colors.scss';

div {
  background-color: $d2l-color-saphirella;
}
{% endexample %}

Learn more about the [Sass extension language](http://sass-lang.com/)...

{% include github.html name=page.github %}
