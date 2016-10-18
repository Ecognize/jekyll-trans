# jekyll-trans
Common code for multilingual Jekyll sites

# Acknowledgments
[Guide that inspired this](https://sylvain.durand.tf/making-jekyll-multilingual/)
Thanks goes to @sylvaindurand.

# Usage
1. Add this repo as submodule to `_includes`;
2. Make the following: `_layouts/redirect.html`, `_includes/t.html`, `_includes/langbox.html`;
3. In all of those files put the following: `{% include jekyll-trans/<filename>.html %}` (replace `<filename>` ofc). This is to dance around GitHub pages' symlink limitations;
4. Create folders named after languages you have, put `index.html` referencing your normal layout. In root `index.html` reference a `redirect` layout;
5. Use as `{% include t.html s='translation_string_id' %}`
6. Include `lang = {{ page.lang }}` in your `<html>` tag
7. Put default `lang` variables over paths, i.e.:
```YAML
defaults:
  -
    scope:
      path: uk
    values:
      lang: uk
  -
    scope:
      path: en
    values:
      lang: en
```
8. Define translation strings as:
```YAML
t:
  en:
    lang:          'English'
    key:           'value'
    key2:          'value2'
```
9. Key `lang` is assumed to be the language's name in itself, for the purposes of the language selection UI.
10. For UI JavaScript include `langbox_js.html` from somewhere relevant, e.g. `{% include jekyll-trans/langbox_js.html %}` from your `scripts.html` include.
11. Provide the EU cookie directive translations at: `t.lang.cookie_banner`.

TODO:
- blog setup i.e. links to page's translation
- make cookie thing optional
