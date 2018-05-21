$(function(){
    $(".devour-button").on("click", function(event){
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/burgers" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function(){
            console.log("Changed devour to", newDevour);
            location.reload();
            
        });
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bc").val().trim(),
            devoured: 1
        }

        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("created new burger");
            location.reload();
        });
    });

});

