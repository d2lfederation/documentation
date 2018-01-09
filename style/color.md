---
title: Color
permalink: /style/color/
layout: component
bower: d2l-colors
github: BrightspaceUI/colors
---
## Color Palette

The Daylight color palette is designed to combine a white backdrop with muted grays, and small yet bold instances of color. This sets the foundation for the open, friendly, and easy to use tone of the interface.

### Basic Grays

These grays are used to organize the pure white Daylight page into an information hierarchy. Icons and body text use Ferrite as the default gray.

{% include paint-chip-group.html set=site.data.colors.gray size=2 %}

### Primary Accent

Daylight uses two bold primary accent colors to call attention to important foundational page elements.

{% include paint-chip-group.html set=site.data.colors.primary size=2 %}

### Feedback Colors

Four colors from the palette are used as “feedback” colors. These are to call attention to areas where the system is providing feedback to the user, as a result of direct action or asynchronous events. These include popup alerts, toasts, notifications, progress bars, completion checkmarks, etc.

{% include paint-chip-group.html set=site.data.colors.feedback size=4 %}

### Full Palette

These are all the colors in the Daylight palette. These can be used for illustration, content tiles, or course colors. Each color has a primary tone (viewed below as the slightly “taller” swatch), supplemented three additional tints and shades.

{% include paint-chip-group.html set=site.data.colors.full size=4 %}

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
  <custom-style>
    div {
      background-color: var(--d2l-color-cinnabar);
    }
  </custom-style>
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
  background-color: $d2l-color-cinnabar;
}
{% endexample %}

Learn more about the [Sass extension language](http://sass-lang.com/)...

{% include github.html name=page.github %}
