$(document).ready(function(){
	var buttons = ["small","medium","large","xlarge"];

			$.each(buttons, function(index, element){
					$("<div class='boxes' id='"+element+"' />").appendTo("body");
			});


			$(".boxes").each(function(index, element){
					var currentID = $(element).attr("id");
					var currentIDselector = "#" + currentID;
					$(currentIDselector).click(function(){
						
							console.log(currentID);
							$.each(buttons, function(index, element){
									$("body").removeClass(element);
							});
							$("body").addClass(currentID);

					});

			});

			console.log("done");
}