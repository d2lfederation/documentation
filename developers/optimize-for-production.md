---
title: Optimize for Production
permalink: /developers/optimize-for-production/
---

When building a high performant web application, minimizing the number and size of network requests is critical. Network requests are by far the slowest part of loading an application, especially on mobile devices where network connectivity may be more limited.

For this reason, it's very common to concatenate an application's JavaScript and CSS files together. Minifiying and uglifying those combined assets to remove whitespace and apply further optimizations to reduce size is also common, and task runners like [Gulp](http://gulpjs.com/), [Grunt](http://gruntjs.com/) and [Broccoli](http://broccolijs.com/) exist to easily apply these optimizations as part of your project's build process.

But what about HTML imports?

## The Polymer CLI

[Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli)  is Polymer's official command line tool for Polymer. It includes tools for building, optimizing, linting, testing and serving your application.

Install it [using NPM](https://www.npmjs.com/package/polymer-cli):

{% example type: shell %}
npm install -g polymer-cli
{% endexample %}

And then follow the [Polymer CLI documentation](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) for building your application.
