// We assume the user who switches the language doesn't know the current one,
// so we need to have all the translations of cookie notice at hand.

var cookieBanners = {};

{% for l in site.t %}
cookieBanners.{{ l[0] }} = "{{ l[1].cookie_banner }}";
{% endfor %}

(function() {

    // thx, w3schools
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');

        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        var d = "0";
        if (exdays != 0) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            d = d.toUTCString();
        }
        var expires = "expires="+ d;
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    $(document).ready(function() {
        $('#languagebox').change(function(e) {
            var lang = $("option:selected", this).val();

            // Redirect user to the language of his choice but ask before doing that
            // TODO: support of blog type sites not just 1 page

            if (getCookie("no_lang") == "" || getCookie("lang") != "") {
                if (getCookie("lang") != "" || confirm(cookieBanners[lang])) {
                    setCookie("lang", lang, 365*5);
                }
                else {
                    setCookie("no_lang", "please", 0);
                }
            }
            document.location.href = '/' + lang;
        });
    });
})();
