function showMailingPopUp() {
    require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us12.list-manage.com","uuid":"ffa8c7c37ada0d3e1f803b6f6","lid":"cd024d2c79"}) })
    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};

document.getElementById("regbtn").onclick = function() {showMailingPopUp()};
