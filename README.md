# jekyll-trans
Common code for multilingual Jekyll sites

# TODO
Play around with submodule / symlink setup

# Usage
1. Copy `t.html` to your site's `_includes`
2. Use as `{% include t.html s:your_string %}`
3. Other stuff: `index.html`, `langbox.html`
4. Include `lang = {{ page.lang }}` in your `<html>` tag
5. Regexp to replace older code: `{{[ ]*site\.t\[page\.lang\]\.([^ ]*)[ ]*}}` to `{% include t.html s:$1 %}` (Atom, use `\1`)
