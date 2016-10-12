---
title: Menus
permalink: /components/menus/
layout: component
github: Brightspace/d2l-menu-ui
bower: d2l-menu
---
A menu provides a list of choices for the user.

To create a menu, use the `d2l-menu` element and provide a `label` to describe the menu.  Items are added to the menu using either `d2l-menu-item` or `d2l-menu-item-link` and providing a `text` attribute for each item. Menu items can be visually separated by using the `d2l-menu-item-separator` element.  

In addition, menus can be nested by adding a `d2l-menu` element to a `d2l-menu-item`.  

{% example %}
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
  <d2l-menu-item-separator></d2l-menu-item-separator>
  <d2l-menu-item-link text="Upcoming Events" href="http://.../">
  </d2l-menu-item-link>
</d2l-menu>
{% endexample %}

{% a11y Provide Descriptive Label %}
Provide a `label` for the root `d2l-menu` element so that assistive technologies can provide context to users. Avoid ambiguous labels such as "menu". A label should not be provided for nested menus since the label will be inherited from its parent `d2l-menu-item`.
{% enda11y %}

### Menu Items

The `d2l-menu-item` element is used for either handling item selection with JavaScript, or for nesting menus. Provide a `text` attribute for the text to be displayed. To handle item selection in JavaScript, simply add an event handler for the `d2l-menu-item-select` event.

{% example type: javascript %}
menu.addEventListener('d2l-menu-item-select', function(e) {
  console.log('item selected:', e.target);
});
{% endexample %}

### Menu Item Links

The `d2l-menu-item-link` element is used to provide real link semantics for menu items (ex. enable users to right-click and open in new tab). Provide a `text` attribute for the text to be displayed, and an `href` attribute for the link location.  Menu item links should have no children.

### Menu Item Separators

The `d2l-menu-item-separator` element is used to visually separate menu items within a menu.

### Menu Item Checkboxes

A checkbox menu can be created by adding `d2l-menu-item-checkbox` elements to a `d2l-menu`. As with regular menu items, provide a `text` attribute for the text to be displayed.  Optionally specify the `selected` attribute to set the state of the items.

{% example %}
<d2l-menu label="Astronomy">
  <d2l-menu-item-checkbox text="Introduction" selected>
  </d2l-menu-item-checkbox>
  <d2l-menu-item-checkbox text="The Solar System" selected>
  </d2l-menu-item-checkbox>
  <d2l-menu-item-checkbox text="The Universe">
  </d2l-menu-item-checkbox>
</d2l-menu>
{% endexample %}

To handle changes to the `selected` state, add an event handler for the `d2l-menu-item-change` event.

{% example type: javascript %}
menu.addEventListener('d2l-menu-item-change', function(e) {
  console.log('item:', e.target);
});
{% endexample %}

### Menu Item Radios

A radio menu can be created by adding `d2l-menu-item-radio` elements to a `d2l-menu`. As with regular menu items, provide a `text` attribute for the text to be displayed. Each radio item must have a `value` attribute that is unique within the context of the menu. Optionally specify the `selected` attribute to set the state of the items.

{% example %}
<d2l-menu label="Astronomy">
  <d2l-menu-item-radio text="Introduction" value="1" selected>
  </d2l-menu-item-radio>
  <d2l-menu-item-radio text="The Solar System" value="2">
  </d2l-menu-item-radio>
  <d2l-menu-item-radio text="The Universe" value="3">
  </d2l-menu-item-radio>
</d2l-menu>
{% endexample %}

To handle changes to the `selected` state, add an event handler for the `d2l-menu-item-change` event.

{% example type: javascript %}
menu.addEventListener('d2l-menu-item-change', function(e) {
  console.log('item:', e.target);
});
{% endexample %}
