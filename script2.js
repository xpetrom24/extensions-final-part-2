$(document).ready(function(){
	var buttons = ["small","medium","large","xlarge"];

			$.each(buttons, function(index, element){
					$("<div class='imageboxes' id='"+element+"' />").appendTo("body");
			});


			$(".imageboxes").each(function(index, element){
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
})