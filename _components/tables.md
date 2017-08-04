---
title: Tables
permalink: /components/tables/
layout: component
github: BrightspaceUI/table
bower: d2l-table
---
A responsive styled table.

To create a table, extend the native HTML `<table>` element with with the `is="d2l-table"` custom element and optionally surround it with a `<d2l-table-wrapper>` element. There is a slight performance gain when surrounding the `<table>` with a `<d2l-table-wrapper>`.

{% example %}
<d2l-table-wrapper>
	<table is="d2l-table">
		<thead>
		<tr>
			<th>First Name</th>
			<th>Middle Name</th>
			<th>Last Name</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td>Darlene</td>
			<td>Bridget</td>
			<td>Waters</td>
		</tr>
		<tr header>
			<th colspan="3">Inline header</th>
		</tr>
		<tr>
			<td>David</td>
			<td>Robert</td>
			<td>Sandoval</td>
		</tr>
		</tbody>
	</table>
</d2l-table-wrapper>
{% endexample %}

## Sorting attributes

To create a sort button, extend the native HTML `<table>` element with the `is="d2l-table-col-sort-button"`.  The sort button does not include any implementation.  The sort button accepts the `desc` attribute to indicate the sort direction is descending (by default it is ascending). The `nosort` attribute indicate field could be sorted, but is currently not.

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

The table is responsive. When a table is wider than a user's screen, arrows will appear which allow the user to scroll the table back and forth.

<d2l-table-wrapper style="max-width: 200px;">
	<table is="d2l-table">
		<thead>
		<tr>
			<th>First Name</th>
			<th>Middle Name</th>
			<th>Last Name</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td>Darlene</td>
			<td>Bridget</td>
			<td>Waters</td>
		</tr>
		<tr header>
			<th colspan="3">Inline header</th>
		</tr>
		<tr>
			<td>David</td>
			<td>Robert</td>
			<td>Sandoval</td>
		</tr>
		</tbody>
	</table>
</d2l-table-wrapper>

## No column border

To disable column borders, add the `no-column-border` attribute to the `table` element

{% example %}
<d2l-table-wrapper>
	<table is="d2l-table" no-column-border>
		<thead>
		<tr>
			<th>First Name</th>
			<th>Middle Name</th>
			<th>Last Name</th>
		</tr>
		</thead>
		<tbody>
		<tr selected active>
			<td>Darlene</td>
			<td>Bridget</td>
			<td>Waters</td>
		</tr>
		<tr>
			<td>David</td>
			<td>Robert</td>
			<td>Sandoval</td>
		</tr>
		</tbody>
	</table>
</d2l-table-wrapper>
{% endexample %}

## Selectable

To hint that rows are selectable with a hover effect, add the `selectable` attribute to the `table` element. To set a row as being selected, add the `selected` attribute to its `tr` element.

{% example %}
<d2l-table-wrapper>
	<table is="d2l-table" selectable>
		<thead>
		<tr>
			<th>First Name</th>
			<th>Middle Name</th>
			<th>Last Name</th>
		</tr>
		</thead>
		<tbody>
		<tr selected active>
			<td>Darlene</td>
			<td>Bridget</td>
			<td>Waters</td>
		</tr>
		<tr header>
			<th colspan="3">Inline header</th>
		</tr>
		<tr>
			<td>David</td>
			<td>Robert</td>
			<td>Sandoval</td>
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
