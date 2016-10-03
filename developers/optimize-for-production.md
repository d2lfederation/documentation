---
title: Optimize for Production
---

When building a high performant web application, minimizing the number and size of network requests is critical. Network requests are by far the slowest part of loading an application, especially on mobile devices where network connectivity may be more limited.

For this reason, it's very common to concatenate an application's JavaScript and CSS files together. Minifiying and uglifying those combined assets to remove whitespace and apply further optimizations to reduce size is also common, and task runners like [Gulp](http://gulpjs.com/), [Grunt](http://gruntjs.com/) and [Broccoli](http://broccolijs.com/) exist to easily apply these optimizations as part of your project's build process.

But what about HTML imports?

## Vulcanize and the Polymer CLI

[Vulcanize](https://github.com/Polymer/vulcanize) is a tool written as part of the [Polymer CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli) that reduces an HTML file and its imports to a single file.

Install it [using NPM](https://www.npmjs.com/package/vulcanize):

{% example type: shell %}
npm install -g vulcanize
{% endexample %}

And then give Vulcanize an input file and output location:

{% example type: shell %}
vulcanize input.html > output.html
{% endexample %}

In this example, `output.html` will contain inlined versions in place of the imports from `input.html`.

There are a lot of command line flags available for tweaking how Vulcanize operates, as well as plugins for Grunt/Gulp/Broccoli -- check out the **[Vulcanize Documentation](https://github.com/Polymer/vulcanize)**.
