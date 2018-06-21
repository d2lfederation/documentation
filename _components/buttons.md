---
title: Buttons
permalink: /components/buttons/
layout: component
github: BrightspaceUI/button
bower: d2l-button
---
A button indicates a user action.

To create a button, use the `<d2l-button>` custom element, and treat it like a native `<button>` element.

{% example %}
<d2l-button>Button</d2l-button>
{% endexample %}

## Primary Buttons

The button for the most common user action should be made primary by setting the `primary` attribute.

{% note %}
A page should only ever have **ONE** primary button.
{% endnote %}

{% example %}
<d2l-button primary>Yes</d2l-button>
<d2l-button>No</d2l-button>
{% endexample %}

## Disabled Buttons

To prevent a user from interacting with a button, add the standard HTML `disabled` attribute.

{% example %}
<d2l-button disabled>Disabled</d2l-button>
{% endexample %}

## Subtle Buttons

For buttons with advanced or de-emphasized actions, use the `<d2l-button-subtle>` component which contains text and an optional icon.

{% example %}
<d2l-button-subtle icon="d2l-tier1:print" text="Print"></d2l-button-subtle>
{% endexample %}

## Icon Buttons

For cases when it is desired to have an icon perform a clickable action, use the `<d2l-button-icon>` component.

{% example %}
<d2l-button-icon icon="d2l-tier1:home" text="Home"></d2l-button-icon>
{% endexample %}

{% a11y Always Provide Text %}
Always provide the text attribute for a `d2l-button-icon` in order to provide a textual description. It will automatically be applied to the button `aria-label` and to the `title` attribute as a tooltip.
{% enda11y %}

## Floating Workflow Buttons

Longer pages which have important workflow buttons (e.g. save/cancel, next/previous) may wish to have those buttons float in a fixed position at the bottom of the screen. As the buttons are scrolled into view, they will dock at the bottom edge.

To apply this behavior, surround your buttons in the `<d2l-floating-buttons>` web component:

{% example demo: false %}
<d2l-floating-buttons>
	<d2l-button>Save</button>
	<d2l-button>Cancel</button>
</d2l-floating-buttons>
{% endexample %}

## Developing with Buttons

{% include bower.html name=page.bower %}

Then import the components you need:

{% example, demo: false %}
<!-- for normal and primary buttons -->
<link
  rel="import"
  href="bower_components/d2l-button/d2l-button.html">
<!-- for floating workflow buttons -->
<link
  rel="import"
  href="bower_components/d2l-button/d2l-floating-buttons.html">
{% endexample %}

{% include github.html name=page.github %}
