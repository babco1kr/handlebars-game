$(function() {
    $(".change-rode").on("click", function(event){
        event.preventDefault();
        let id = $(this).data("id");
        let rode = $(this).data("newrode");

        if (rode === true) {
            rode = false;
        } else {
            rode = true;
        }
    })















})