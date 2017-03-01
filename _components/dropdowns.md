---
title: Dropdowns
permalink: /components/dropdowns/
layout: component
github: BrightspaceUI/dropdown
bower: d2l-dropdown
---
A dropdown is a positioned container for other elements.

To create a dropdown, use the `d2l-dropdown` element. Provide an opener element by specifying the `d2l-dropdown-opener` class. Add a `d2l-dropdown-content` element to contain the contents of the dropdown.

{% example %}
<d2l-dropdown>
  <button is="d2l-button" class="d2l-dropdown-opener">Open!</button>
  <d2l-dropdown-content>
      Some content...
  </d2l-dropdown-content>
</d2l-dropdown>
{% endexample %}

### Dropdown Content Options

The `d2l-dropdown-content` component supports a number of optional attributes to configure it's appearance and behavior.

{% example demo: false %}
<d2l-dropdown-content min-width="100" max-width="500" vertical-offset="0" no-padding render-content>
  Some content...
</d2l-dropdown-content>
{% endexample %}

By default, the dropdown content is not rendering in the DOM until the dropdown is open. If access to these DOM elements is required prior to opening, it is possible to initially force rendering using the `render-content` attribute, or calling `d2l-dropdown-content`'s `forceRender` method when needed.  

## Dropdown Button

{% example %}
<d2l-dropdown-button text="Open!" primary>
  <d2l-dropdown-content>
    Some content...
  </d2l-dropdown-content>
</d2l-dropdown-button>
{% endexample %}

## Dropdown Context Menu

{% example %}
<d2l-dropdown-context-menu text="Open!">
    <d2l-dropdown-content>
        Some content...
    </d2l-dropdown-content>
</d2l-dropdown-context-menu>
{% endexample %}

## Dropdown Menu Content

The `d2l-dropdown-menu` is a special content component intended the for `d2l-menu` component.

{% example %}
<d2l-dropdown-button text="Open!" primary>
  <d2l-dropdown-menu>
    <d2l-menu label="Astronomy">
      <d2l-menu-item text="Introduction"></d2l-menu-item>
      <d2l-menu-item text="The Solar System">
        <d2l-menu>
          <d2l-menu-item text="The Sun"></d2l-menu-item>
          <d2l-menu-item text="Mercury"></d2l-menu-item>
          <d2l-menu-item text="Venus"></d2l-menu-item>
       </d2l-menu>
      </d2l-menu-item>
      <d2l-menu-item text="The Universe"></d2l-menu-item>
    </d2l-menu>
  </d2l-dropdown-menu>
</d2l-dropdown-button>
{% endexample %}

## Developing with Dropdowns

{% include bower.html name=page.bower %}

Then import the components you need:

{% example, demo: false %}
<!-- for dropdown generic opener -->
<link
  rel="import"
  href="bower_components/d2l-dropdown/d2l-dropdown.html">
<!-- for dropdown button opener -->
<link
  rel="import"
  href="bower_components/d2l-dropdown/d2l-dropdown-button.html">
<!-- for dropdown context-menu opener -->
<link
  rel="import"
  href="bower_components/d2l-dropdown/d2l-dropdown-menu.html">
<!-- for dropdown generic content -->
<link
  rel="import"
  href="bower_components/d2l-dropdown/d2l-dropdown-content.html">
<!-- for dropdown menu content -->
<link
  rel="import"
  href="bower_components/d2l-dropdown/d2l-dropdown-menu.html">
{% endexample %}

{% include github.html name=page.github %}
