$(document).ready(function() {
    $("#change-bg").click(function() {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        $("body").css("background-color", randomColor);
    });
});