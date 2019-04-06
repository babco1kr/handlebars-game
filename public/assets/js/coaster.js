$(function() {
    $(".change-rode").on("click", function(event){
        event.preventDefault();
        let id = $(this).data("id");
        let rode = $(this).data("newrode");

        if (rode == true) {
            rode = false;
        } else {
            rode = true;
        }

        var newRodeState = {
            rode: rode
        }

        $.ajax("/api/coasters/" + id, {
            type: "PUT",
            data: newRodeState
        }).then(function() {
            console.log("changed rode state to: " + rode);
            location.reload();
        })
    })
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newCoaster = {
            name: $("#coaster").val().trim()
        };

        $.ajax("/api/coasters", {
            type: "POST",
            data: newCoaster
        }).then(function() {
            console.log("New coaster Added");
            location.reload();
        });
    });














})