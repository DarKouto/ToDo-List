// Check Off specific To-Dos by cliking
$("ul").on("click", "li", function() { // when a <li> is clicked INSIDE a <ul>. The code must be like this, because when the page loads it only has 3 li's, so we must instruct it to go the the parent element, in this case the <ul> which was already on the page when it loaded.
    $(this).toggleClass("completed"); // created the class .completed on css, then it just toggles it on or off, without the need for the if statements commented below
});
/*
$("li").on("click", function(){
    if ( $(this).css("color") === "rgb(128, 128, 128)" ) { // always use RBG colors for comparision, had it been "grey" it wouldn't work
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    else {
        $(this).css({
            color: "grey",
            textDecoration: "line-through" // this is an OBJECT, for multiple css changes. Notice the camelCase on "textDecoration", very important!
        }); 
    }
});
*/

// Click on X do delete ToDo
$("ul").on("click", "span", function(event) { // the same logic as above: when a <span> INSIDE a <ul> is clicked
    $(this).parent().fadeOut(500, function() { // this is to remove the parent element inside the span, in this case being the enclosing <li>
        $(this).remove(); // remember, use the callback fuction so it only removes after the animation is done.
    });
    event.stopPropagation(); // this is to STOP the "Event Bubbling", (the span event would bubble up to parent elements, like the li, ul, div, body...) 
});

// Add new ToDo
$("input[type='text']").on("keypress", function(event) {
    if (event.which === 13) { // checks if the keypress was the ENTER key
        var todoText = $(this).val(); // val() obtains the value of the input type text
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"); // this adds html to the element selected, in this case, adds a li to a <ul>
        $(this).val(""); // sets the input back to empty
    }
});

$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
});