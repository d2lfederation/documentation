---
title: Use Components
---

## Individual Components & Semantic Versioning

Each Brightspace UI component has its own code repository on GitHub [under the Brightspace organization](https://github.com/Brightspace/). You'll find links to their repositories on each of the component documentation pages.

Because components are independent of each other, they are versioned separately. This allows for major changes to be made to one component without impacting the others. It also means you can choose the version of each component to use in your application, and can also choose when to upgrade to pick up new features.

When incrementing version numbers, we use [semantic versioning](http://semver.org/) rules.

For example, if the version is `1.8.5` in the form `MAJOR.MINOR.PATCH`:

1. The MAJOR version number will increase when we make incompatible API changes
2. The MINOR version will increase when we introduce backwards-compatible features
3. The PATCH version will increase when we make backwards-compatible bug fixes

## Install Using Bower

The best way to install and use Brightspace UI components is with Bower, a simple package manager for the web. To install Bower, follow the instructions on the [Bower web site](https://bower.io/).

<img src="/images/bower-logo.png" alt="Bower logo" style="padding-left: 50px;width:200px;height:176px;" />

Once Bower is installed, you can then use it from the command line to install individual Brightspace UI components. Bower will automatically make sure any dependencies are installed as well.

For example, to install the `d2l-button` component:

{% example type: shell %}
bower install d2l-button
{% endexample %}

Bower will place the `d2l-button` component and any of its dependencies in a directory called `bower_components` at the root of your project.

To save the list of dependencies used by your project, run `bower init` to create a `bower.json` file for your project. You can then add the `--save` flag when installing packages and they'll be added to your `bower.json` file's list of dependencies:

{% example type: json, title: "Sample bower.json file:" %}
{
	"name": "my-project-using-brightspace-ui",
	"dependencies": {
		"d2l-button": "^3.0.1",
		"d2l-icons": "^2.9.1"
	}
}
{% endexample %}

With a `bower.json` file, you can simply run `bower install` or `bower update` to quickly install or update all your project's dependencies at once. You can also adjust which version of each dependency is used.

{% note Version Range Specifiers %}
When referencing Brightspace UI component versions in your `bower.json` file, we recommend using the caret `^` range specifier instead of the default of tilde `~`. This will allow your project to pick up backwards-compatible minor releases automatically, which will often also contain safe bug fixes.
{% endnote %}

**[> Learn more about Bower...](https://bower.io/#getting-started)**

## Using Components

Once the Brightspace UI components are installed, the next step is to consume them in your application.

### Include the Polyfill

As was mentioned in the [Introduction to Web Components](/developers/web-components.html), many browsers have yet to implement all (or any) of the Web Component features. Until they do, a polyfill is needed.

{% example type: shell, title: "You can install the polyfill using Bower:" %}
bower install --save webcomponentsjs
{% endexample %}

Then include the `webcomponents-lite` file as the first script tag in the `<head>` element of your application, before any code that touches the DOM:

{% example demo: false %}
<!doctype html>
<html>
  <head>
    <script
      src="bower_components/webcomponentsjs/webcomponents-lite.min.js">
    </script>
    <!-- now you can import Brightspace UI components -->
  </head>
</html>
{% endexample %}

An alternate approach to installing the polyfill from Bower is to reference it from the Brightspace CDN:
[https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js](https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js)

### Import and use Components

The last step is to use an [HTML Import](http://webcomponents.org/articles/introduction-to-html-imports/) to import the components your application needs, and then use them in your markup.

{% important %}
The imports should happen in the `<head>` of your document, **AFTER** the polyfill has been included.
{% endimportant %}

{% example demo: false %}
<!doctype html>
<html>
  <head>
    <script
      src="bower_components/webcomponentsjs/webcomponents-lite.min.js">
    </script>
    <link rel="import" href="bower_components/d2l-button/d2l-button.html">
    <link rel="import" href="bower_components/d2l-link/d2l-link.html">
    <link rel="import" href="bower_components/d2l-icons/d2l-icons.html">
  </head>
</html>
{% endexample %}

Finally you can reference the imported custom elements in your markup:

{% example demo: false %}
<body>
  <button is="d2l-button">Hello</button>
  <d2l-icon icon="d2l-tier1:print"></d2l-icon>
</body>
{% endexample %}

### Interacting with Components and the WebComponentsReady event

While HTML imports load and then register and upgrade custom elements in the browser, there's a period of time where JavaScript interaction (e.g. adding event listeners) with those custom elements can't occur. To solve this, browsers who natively support imports block `<script>` tags in the main document, but for browsers without import support this won't happen.

To get around this, the polyfill exposes the `WebComponentsReady` event as a stand-in for the blocking behavior. You can add a listener for it and be confident that all web components will be registered and upgraded by the time your callback is called.

{% example, type: javascript %}
window.addEventListener('WebComponentsReady', function() {
	// imports are loaded, elements are registered and upgraded
	var button = document.getElementById('myButton');
	button.addEventListener('click', function() {
		alert('button clicked!');
	});
});
{% endexample %}
