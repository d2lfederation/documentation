---
title: Tables
permalink: /components/tables/
layout: component
github: BrightspaceUI/table
bower: d2l-table
---
A responsive styled table.

To create a table, extend the native HTML `<table>` element with with the `is="d2l-table"` custom element and optionally surround it with a `<d2l-table-wrapper>` element.

{% example %}
<d2l-table-wrapper>
	<table is="d2l-table">
		<thead>
			<th>
				<button is="d2l-table-col-sort-button">Ascending</button>
			</th>
			<th>
				<button is="d2l-table-col-sort-button" desc>Descending</button>
			</th>
			<th>
				<button is="d2l-table-col-sort-button" nosort>Not sorted</button>
			</th>
		</thead>
		<tbody>
		<tr>
			<td>123</td>
			<td>654</td>
			<td>654</td>
		</tr>
		<tr header>
			<th colspan="3">Inline Header</th>
		</tr>
		<tr>
			<td>456</td>
			<td>321</td>
			<td>321</td>
		</tr>
		</tbody>
	</table>
</d2l-table-wrapper>
{% endexample %}

## Responsive

The d2l-table is automatically responsive

{% example %}
<d2l-table-wrapper style="max-width: 200px;">
	<table is="d2l-table">
		<thead>
			<th>
				<button is="d2l-table-col-sort-button">Ascending</button>
			</th>
			<th>
				<button is="d2l-table-col-sort-button" desc>Descending</button>
			</th>
			<th>
				<button is="d2l-table-col-sort-button" nosort>Not sorted</button>
			</th>
		</thead>
		<tbody>
		<tr>
			<td>123</td>
			<td>654</td>
			<td>654</td>
		</tr>
		<tr header>
			<th colspan="3">Inline Header</th>
		</tr>
		<tr>
			<td>456</td>
			<td>321</td>
			<td>321</td>
		</tr>
		</tbody>
	</table>
</d2l-table-wrapper>
{% endexample %}

## No column border

To disable column borders, add the `no-column-border` attribute to the `table` element

{% example %}
<d2l-table-wrapper>
	<table is="d2l-table" no-column-border>
		<thead>
			<th>
				<button is="d2l-table-col-sort-button">Ascending</button>
			</th>
			<th>
				<button is="d2l-table-col-sort-button" desc>Descending</button>
			</th>
			<th>
				<button is="d2l-table-col-sort-button" nosort>Not sorted</button>
			</th>
		</thead>
		<tbody>
		<tr>
			<td>123</td>
			<td>654</td>
			<td>654</td>
		</tr>
		<tr header>
			<th colspan="3">Inline Header</th>
		</tr>
		<tr>
			<td>456</td>
			<td>321</td>
			<td>321</td>
		</tr>
		</tbody>
	</table>
</d2l-table-wrapper>
{% endexample %}

## Selectable

To select a row, add the `selected` attribute to the `tr` element. To make a table rows respond to hovering, add the `selectable` attribute to the `table` element.

{% example %}
<d2l-table-wrapper>
	<table is="d2l-table" selectable>
		<thead>
			<th>
				<button	is="d2l-table-col-sort-button">Ascending</button>
			</th>
			<th>
				<button is="d2l-table-col-sort-button" desc>Descending</button>
			</th>
			<th>
				<button is="d2l-table-col-sort-button" nosort>Not sorted</button>
			</th>
		</thead>
		<tbody>
		<tr selected active>
			<td>123</td>
			<td>654</td>
			<td>654</td>
		</tr>
		<tr header>
			<th colspan="3">Inline Header</th>
		</tr>
		<tr>
			<td>456</td>
			<td>321</td>
			<td>321</td>
		</tr>
		</tbody>
	</table>
</d2l-table-wrapper>
{% endexample %}

## Styling

Custom property | Description | Default
----------------|-------------|----------
`--d2l-table-border-color` | Border Color | `var(--d2l-color-titanius)` |
`--d2l-table-border-radius` | Corner Border Radius | `0.3rem` |
`--d2l-table-border` | Border | `1px solid var(--d2l-table-border-color);` |
`--d2l-table-header-background-color` | Header background color (th elements under `<thead>` or `<tr header>`) | `var(--d2l-color-regolith);` |
`--d2l-table-body-background-color` | Body background color (non-header) | `#fff` |
`--d2l-table-row-background-color-active` | Active row background color | `var(--d2l-color-celestine-light-1)` |
`--d2l-table-row-border-color-selected` | Selected row border color | `var(--d2l-color-celestine-light-2)` |
`--d2l-table-row-border-color-active-selected` | Active and Selected row border color | `var(--d2l-color-celestine-light-2)` |
`--d2l-table-row-background-color-active-selected` | Active and Selected row background color | `#EBF5FC` |
`--d2l-table-row-background-color-selected` | Selected row background color | `var(--d2l-color-celestine-light-1)` |
`--d2l-table-border-overflow` | Border to show when the table overflows | `dashed 1px #d3d9e3` |
`--d2l-table-outer-border` | Border to show around the table | `var(--d2l-table-border)` |
`--d2l-table-outer-row-border-color-selected` | Border color of selected rows around the table | `var(--d2l-table-row-border-color-selected)` |
`--d2l-table-outer-row-border-color-active-selected` | Border color of active and selected rows around the table | `var(--d2l-table-row-border-color-active-selected)` |

{% example %}
<style is="custom-style">
.ugly-table {
	--d2l-table-border-color: purple;
	--d2l-table-border-radius: 0;
	--d2l-table-header-background-color: turquoise;
	--d2l-table-body-background-color: grey;
	--d2l-table-row-background-color-active: blue;
	--d2l-table-row-border-color-selected: grey;
	--d2l-table-row-border-color-active-selected: black;
	--d2l-table-row-background-color-active-selected: red;
	--d2l-table-row-background-color-selected: pink;
	--d2l-table-outer-border: 1px solid orange;
	--d2l-table-outer-row-border-color-selected: yellow;
	--d2l-table-outer-row-border-color-active-selected: green;
}
</style>

<d2l-table-wrapper>
	<table is="d2l-table" class="ugly-table" selectable>
		<thead>
			<th>
				<button	is="d2l-table-col-sort-button">Ascending</button>
			</th>
			<th>
				<button is="d2l-table-col-sort-button" desc>Descending</button>
			</th>
			<th>
				<button is="d2l-table-col-sort-button" nosort>Not sorted</button>
			</th>
		</thead>
		<tbody>
		<tr selected active>
			<td>123</td>
			<td>654</td>
			<td>654</td>
		</tr>
		<tr header>
			<th colspan="3">Inline Header</th>
		</tr>
		<tr>
			<td>456</td>
			<td>321</td>
			<td>321</td>
		</tr>
		</tbody>
	</table>
</d2l-table-wrapper>
{% endexample %}

## Developing with Tables

{% include bower.html name=page.bower %}

Then import the components you need:

{% example, demo: false %}
<link
  rel="import"
  href="bower_components/d2l-table/d2l-table.html">
{% endexample %}

{% include github.html name=page.github %}
