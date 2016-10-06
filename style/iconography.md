---
title: Iconography
permalink: /style/iconography/
layout: component
github: Brightspace/d2l-icons-ui
bower: d2l-icons
---
The design language employs a 3 tier hierarchy for the use of icons. These tiers dictate the proper placement and usage of the icon library.

{% note Minimize Icon Usage %}
As a general guideline, it is advised that the use of icons be minimized on any given screen. When possible, use plain text as an alternative.
{% endnote %}

## Categories & Tiers

Each icon is grouped into a category, and every icon in a particular category has the same native size.

Currently, there are 5 icon categories:

| Name | Description | Sample | Size |
| :----: | --- | :---: | :---: |
| tier1 | minimal level of detail, solid style | <d2l-icon icon="d2l-tier1:print"></d2l-icon> | `18px` |
| tier2 | medium level of detail, linear style |<d2l-icon icon="d2l-tier2:file-audio"></d2l-icon>| `24px` |
| tier3 | medium level of detail, linear style | <d2l-icon icon="d2l-tier3:notification-bell"></d2l-icon>| `30px` |
| html-editor | for use in the HTML editor | <d2l-icon icon="d2l-html-editor:bold"></d2l-icon> | `18px` |
| emoji | for all your emoji needs, same detail/style as tier1 | <d2l-icon icon="d2l-emoji:happy"></d2l-icon> | `18px` |

[&gt; Browse previews of all categories and icons](https://github.com/Brightspace/d2l-icons-ui/blob/master/d2l-icons.md)

{% note Icon Sizes %}
Always choose the icon whose native size best matches your desired icon size, ideally exactly.
{% endnote %}

## Color

The color of icons should be "tungsten" (`#72777a`). For icons which require a hover/focus effect, the color should change to "celestuba" (`#1c5295`) with a `0.3s ease` transition.

{% assign tungsten = site.data.colors.grey[7] %}
{% assign celestuba = site.data.colors.secondary[5] %}
{% include paint-chip.html color=tungsten %}
{% include paint-chip.html color=celestuba %}

## Accessibility

For **decorative images**, from [WebAIM](http://webaim.org/techniques/alttext/#decorative):

> Decorative images do not present important content, are used for layout or non-informative purposes, and do not appear within a link. In almost all cases, spacer and decorative images should have null alt text (`alt=""`).

{%wcag level: "a", url: "https://www.w3.org/TR/WCAG20-TECHS/H67.html" %}
H67: Using null alt text and no title attribute on img elements that AT should ignore
{% endwcag %}

Most Brightspace UI icons are **not** decorative -- they're used for informative purposes. Icons therefore need alternate text or should be accompanied by descriptive text.

In scenarios where the design of the application doesn't warrant on-screen alternate text, a technique may be used to [position the text offscreen](http://webaim.org/techniques/css/invisiblecontent/), making it available to screen readers. The [`<d2l-offscreen>`](https://github.com/Brightspace/d2l-offscreen-ui) component is available for this purpose.

## Bidrectionality

When rendered in a right-to-left direction, any icons which show directionality in terms of time (back/forward, next/previous, etc.) need to be mirrored horizontally.

The `<d2l-icon>` component ([see below](#basic-icons)) will automatically mirror directional-specific Brightspace UI icons in a right-to-left environment.

{% example %}
<p>
  Should point to the right
  <d2l-icon icon="d2l-tier1:chevron-right"></d2l-icon>
</p>
<p dir="rtl">
  Should be mirrored and point to the left
  <d2l-icon icon="d2l-tier1:chevron-right"></d2l-icon>
</p>
{% endexample %}

To learn more about how best to determine if an icon should be mirrored, refer to [Google's Material Design Bidirectionality](https://material.google.com/usability/bidirectionality.html) documentation.

## Developing with Icons

{% include bower.html name=page.bower %}

### Raw SVGs

The raw SVG files for every category and icon are available in the Bower package in the `/images` directory. To see a preview of every icon, [browse them on GitHub](https://github.com/Brightspace/d2l-icons-ui/tree/master/images).

SVG image assets are useful when you want to use an `<img>` tag. For example:

{% example, demo: false %}
<img
  src="bower_components/d2l-icons/images/tier1/print.svg"
  alt="print" />
{% endexample %}

### Polymer Icon Sets

Polymer's [`<iron-iconset-svg>` component](https://github.com/PolymerElements/iron-iconset-svg) allows you to define a collection of SVG icons, and used together with `<d2l-icon>` (see below) you can consume those icons in your application.

The `d2l-icons` component exposes an iconset collection for each category. Its filename will be in the form `<name>-icons.html`. The `d2l-icons.html` file imports all the categories.

{% example, demo: false %}
<link
  rel="import"
  href="bower_components/d2l-icons/tier1-icons.html">
{% endexample %}

### Basic Icons

The `<d2l-icon>` web component is the easiest way to get a basic icon into your application.

First, import the iconset for the category and the `d2l-icons.html` component:

{% example, demo: false %}
<link
  rel="import"
  href="bower_components/d2l-icons/tier1-icons.html">
<link
  rel="import"
  href="bower_components/d2l-icons/d2l-icon.html">
{% endexample %}

Alternately you can just import `d2l-icons.html` to get everything, but the import will be much larger.

`<d2l-icon>` has a single property `icon`, which corresponds to the category and icon you'd like to use in the form `d2l-<category-name>:<icon-name>`.

{% example %}
<d2l-icon icon="d2l-tier1:print"></d2l-icon>
{% endexample %}

The [color of the icon](/style/color/) will default to "tungsten", and the size will be set automatically based on the category name. Both can be customized with a `custom-style` block by setting the `--d2l-icon-height` and `--d2l-icon-width` variables:

{% example %}
<style is="custom-style">
#icon-custom-demo {
  color: indigo;
  --d2l-icon-height: 50px;
  --d2l-icon-width: 50px;
}
</style>
<d2l-icon id="icon-custom-demo" icon="d2l-tier1:gear"></d2l-icon>
{% endexample %}

### Clickable Icons

Oftentimes an icon's purpose is more than informative -- clicking the icon performs a user action (e.g. print) or navigates the user to a different place in the application. For these cases there are two components which extend `d2l-icon` with clickable functionality: `<d2l-icon-button>` and `<d2l-icon-link>`.

{% important Buttons vs. Links %}
Use a **button** when the user is performing an action (like submitting a form), or when there is no obvious `href` to apply.

Use an **anchor** when the opposite is true: when the user is navigating somewhere with a clear `href`. Ask yourself: would the user expect to right-click the element and "open in new tab"? If yes, it should be a link.
{% endimportant %}

Both components are extensions of the standard HTML `<button>` and `<a>` tags, but have an `icon` property which lights up on hover/focus.

{% example %}
<button is="d2l-icon-button" icon="d2l-tier1:print">Print</button>&nbsp;&nbsp;&nbsp;&nbsp;
<a is="d2l-icon-link" icon="d2l-tier1:home" href="/">Home</a>
{% endexample %}

{% a11y Always Provide Text %}
Just as with standard buttons and links, always provide a textual description of the action/link. It will automatically be placed offscreen and applied to the `title` attribute as a tooltip.
{% enda11y %}

{% include github.html name=page.github %}
