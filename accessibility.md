---
title: Accessibility
permalink: /accessibility/
---

Web accessibility is all about ensuring people with disabilities have equal access to information and functionality on the web. Brightspace UI's components will help you with accessibility when they can, but your application's accessibility is ultimately your responsibility. If you use semantic markup, follow web standards, and put in a bit of extra effort, your application can be accessible to everyone.

As you browse the component documentation, you'll find inline accessibility tips:

{% a11y %}
Look out for these, they contain useful accessibility tips for using Brightspace UI components.
{% enda11y %}

Below you'll find more general accessibility information to help you build accessibile web applications. We'll be referring to version 2.0 of the [Web Content Accessibility Guidelines (WCAG 2.0)](http://www.w3.org/TR/WCAG20/) standard.

### Page Title

Each page must include a unique, descriptive and relevant title using the `<title>` element.

{% example demo: false %}
<!doctype html>
<html>
  <head>
    <title>Unique, descriptive page title</title>
  </head>
</html>
{% endexample %}

For [single-page applications](https://en.wikipedia.org/wiki/Single-page_application), make sure the title is kept up-to-date with changes to the primary content by setting `document.title` via JavaScript:

{% example type: javascript %}
document.title = 'my new page title';
{% endexample %}

{% a11y WCAG 2.0 Success Criterion 2.4.2 (Level A): %}
* [Understanding SC 2.4.2](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)
* [Techniques for providing descriptive titles for web pages](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G88)
{% enda11y %}

### Text Alternatives

All non-text content (images, charts, audio, video, etc.) must be accompanied by a text alternative. For images, use the `“alt”` attribute or set `alt=“”` for decorative images. For other types of media, alternative formats may include: transcripts for audio, descriptive audio for video.

{% a11y WCAG 2.0 Success Criterion 1.1.1 (Level A): %}
* [Understanding SC 1.1.1](http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
* [WebAIM: Alternate Text](http://webaim.org/techniques/alttext/)
{% enda11y %}

### Keyboard Navigation and Focus Management

All page elements must be accessible using the keyboard in a logical and intuitive order. Keyboard focus should be visible and obvious. Focus should be never be lost when elements such as menus or modal dialogs are opened and closed.

{% a11y WCAG 2.0 Success Criterion 2.1.1 (Level A): %}
* [Understanding SC 2.1.1](http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html)
* [Techniques for using both keyboard and other device-specific functions](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR20)
* [WebAIM: Keyboard Accessibility](http://webaim.org/techniques/keyboard/)
{% enda11y %}

### Further Reading and Resources

* [WCAG 2.0](http://www.w3.org/WAI/intro/wcag20)
* [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/)
* [Web Accessibility Initiative](http://www.w3.org/WAI/)
* [ARIA Authoring Practices](http://www.w3.org/TR/wai-aria-practices/)
* [WebAIM](http://webaim.org/)
