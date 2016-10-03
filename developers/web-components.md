---
title: Web Components
---

The main goal of Brightspace UI: to provide reusable, accessible UI components which can easily and seamlessly integrate into your web application, no matter the technologies or frameworks being used. Server-side rendering, client-side rendering, React, Angular, vanilla HTML/JS/CSS -- Brightspace UI needs to work with them all.

<img src="{{ site.baseurl }}images/web-components-logo.svg" alt="web components logo" style="padding-left: 50px;width:200px;height:133px;" />

### A Brief Introduction to Web Components

This is where Web Components come in. Web Components are a collection of features in the process of [being added to the HTML and DOM specifications](https://www.w3.org/standards/techs/components#w3c_all). They bring with them the ability to create components which are reusable, encapsulated (HTML + JS + CSS, all bundled together) and interoperable (play nice with each other).

The four main features behind Web Components are:

- **Custom Elements:** define new types of DOM elements
- **HTML Imports:** include and reuse HTML documents in other documents
- **Templates:** declare inert DOM subtrees for duplication
- **Shadow DOM:** provides functional boundaries between DOM subtrees for encapsulation

While the standards bodies and browser vendors work to solidify the Web Components specifications, using Web Components natively across all the browsers Brightspace supports is not currently possible. In the meantime, Google has created [a series of polyfills](http://webcomponents.org/polyfills/) for the different features which allows Web Components to be used today.

**[> Learn more about Web Components...](http://webcomponents.org/)**

### Google Polymer

Polymer is a [library built by Google](https://www.polymer-project.org) aimed at making the development of Web Components easier. It extends the existing browser polyfills, providing an API to easily leverage custom elements, HTML imports, templates and to simulate shadow DOM. Polymer also comes with a great set of tools to help document, test and optimize your Web Component-based application.

<img src="{{ site.baseurl }}images/polymer-logo.png" alt="Polymer logo" style="padding-left: 50px;width:200px;height:136px;" />

All Brightspace UI components are built using Google Polymer.

**[> Learn more about Google Polymer...](https://www.polymer-project.org)**
