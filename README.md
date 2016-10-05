# Brightspace UI Documentation
[![Build status][ci-image]][ci-url]

Source files for generating the documentation for Brightspace UI at [http://ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation & Setup

### Built using Jekyll

The site is built using [Jekyll](https://jekyllrb.com/), a web site generator which turns HTML, CSS,  [Markdown](https://daringfireball.net/projects/markdown/) and [Liquid](https://github.com/Shopify/liquid/wiki) templates into a static site. It's the same thing [GitHub Pages](https://pages.github.com/) uses, so you know it's cool.

To get started, follow [Jekyll's Quick-start guide](https://jekyllrb.com/docs/quickstart/). You'll need Ruby.

### Building and Serving

Once this repo is cloned and Jekyll is installed, use NPM to pull down a few more depdendencies:

```shell
# only need to run once
npm install
```

To build the web components used in the documentation:
```shell
# only need to run once, or when any new web components are added/changed
npm run build
```

Once the web components are built once, you can then use Jekyll's [build or serve commands](https://jekyllrb.com/docs/usage/).

Building:
```shell
jekyll build
```

Building, serving and watching for changes:
```shell
jekyll serve
```

Jekyll `serve` isn't super clever, so if you make any changes to the site configuration or plugins you'll need to run `jekyll build` again.

### Writing Documentation

Tips & tricks for contributing to the docs.

### Side Navigation

The hierarchy of the side navigation menu is defined as JSON in `/_data/menu.json`.

### Custom Code Blocks

The documentation uses several custom [Liquid Code Blocks](https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers#create-your-own-tag-blocks) to make reusing things easier. They can be found in the `/_plugins` directory.

#### Code Example

This block allows you to show an inline code example. It takes 3 optional parameters:
- **type:** Type of code, defaults to "html". Can be any of the 98 languages the [Rouge code highlighter](http://rouge.jneen.net/) supports. Most common: "html", "javascript", "css", "shell".
- **demo:** Whether to render an inline demo. Defaults to `true` when the type is "html".
- **title:** Title of the example, defaults to "Example (<type>)".

```markdown
{% example type: "html", title: "Custom Title", demo: false %}
<button is="d2l-button">Button</button>
{% endexample %}
```

#### Note, Important and A11y

These three blocks let you create inline color-coded notes of various types. They each have an optional title.

Note (blue):
```markdown
{% note %}
A note about something interesting.
{% endnote %}
```

Important (red):
```markdown
{% important %}
Something really important goes in here.
{% endimportant %}
```

A11y:
```markdown
{% a11y Custom title %}
Accessibility tips go in here.
{% endnote %}
```

#### WCAG

Simple tag for displaying a WCAG badge with a link to a WCAG document. Takes 2 parameters:
- **level:** the WCAG level, one of "a", "aa" or "aaa". Defaults to "a".
- **url:** URL of the WCAG document

```markdown
{% wcag level: "aa", url: "http://w3c.org/somewhere" %}
Title of the document
{% endwcag %}
```

## Deploying

The site is deployed to Amazon S3 during the [Travis CI build step](https://travis-ci.org/BrightspaceUI/documentation/). A deployment will occur under two conditions:

### Pull Requests

When a pull request is created, the site containing the changes from the pull request will be deployed to `/pr/<pull-request-number>/`. Any subsequent commits to that pull request will trigger a re-deploy which overwrites the original. For this reason, browser caching of the assets is disabled.

### Tagged Commits

Tagged commits are used to signify a major release of the documentation site. Do not use tags for any other purpose. When a tagged commit occurs, the site will be deployed to `/<tag-value>/`.

At the same time, the root of the documentation site will have its redirect adjusted to point at the new tagged location.

[ci-url]: https://travis-ci.org/Brightspace/valence-ui-docs
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-docs.svg?branch=master
