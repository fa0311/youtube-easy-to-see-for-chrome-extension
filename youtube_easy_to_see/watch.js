
page_reload_check();
var cash_url;
function page_reload_check() {
    if (cash_url != location.href) {
        if (location.href.match(/watch/)) {
            $("#container.ytd-masthead").addClass("watch");
        } else {
            $("#container.ytd-masthead").removeClass("watch");
        }
        cash_url = location.href;
    }
    setTimeout(page_reload_check, 500);
}