//check off specific todos is they are completed or not/

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

});

//deleting the todo item

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//grabbing the input


$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");

		//adding the new todo to be a li in ul

		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");


	};
});

$(".fa-pencil").click(function() {
	$("input[type='text']").fadeToggle();
});