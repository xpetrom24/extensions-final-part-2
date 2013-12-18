$(document).ready(function(){

	var gallery = [
		
		{ 
			"name":" Alex Pardee",
			"url": "http://eyesuckink.com/"

		},
		{	
			"name":"Andrew Schoultz",
			"url":" http://www.andrewschoultz.com/"
	
		},
		{
			"name":"Aryz",
			"url": "http://www.aryz.es/"
	
		},
		{	
			"name":"Audrey Kawasaki",
			"url":" http://www.audrey-kawasaki.com/"
		
		},
		{	
			"name":"Banksy",
			"url":" http://www.banksy.co.uk/"
		
		},
		{	
			"name":"Barry McGee",
			"url":" https://www.pbs.org/art21/artists/mcgee/"
		
		},
		{	
			"name":"Blu",
			"url":" http://www.blublu.org/"
		
		},
		{	
			"name":"Camille Rose Garcia",
			"url":" http://www.camillerosegarcia.com/"
		
		},
		{	
			"name":"Chloe Early",
			"url":" http://chloeearly.com/"
		
		},
		{	
			"name":"Conor Harrington",
			"url":" http://conorsaysboom.wordpress.com/"
		
		},
		{	
			"name":"David Choe",
			"url":" http://www.davidchoe.com/"
		
		},
		{	
			"name":"David Ellis",
			"url":" http://joshualinergallery.com/artists/david_ellis/"
		
		},
		{	
			"name":"El Mac",
			"url":" http://elmac.net/"
		
		},
		{	
			"name":"Escif",
			"url":" http://www.streetagainst.com/"
		
		},
		{	
			"name":"Evan Hecox",
			"url":" http://www.evanhecox.com/"
		
		},
		{	
			"name":"Greg Simkins",
			"url":" http://www.imscared.com/"
		
		},
		{	
			"name":"Herbert Baglione",
			"url":" http://herbertbaglione.blogspot.com/"
		
		},
		{	
			"name":"Horfe",
			"url":" http://horfee.tumblr.com/"
		
		},
		{	
			"name":"Hyuro",
			"url":" http://www.hyuro.es/"
		
		},

		{	
			"name":"Interesni Kazki",
			"url":" http://interesnikazki.blogspot.com/"
		
		},
		{	
			"name":"James Jean",
			"url":" http://www.jamesjean.com/"
		
		},
		{	
			"name":"Jeremy Fish",
			"url":" http://sillypinkbunnies.com/"
		
		},
		{	
			"name":"Josh Keyes",
			"url":" http://www.joshkeyes.net/"
		
		},
			{	
			"name":"JR",
			"url":" http://www.jr-art.net/"
		
		},

		{	
			"name":"Kehinde Wiley",
			"url":" http://www.kehindewiley.com/"
		
		},
		{	
			"name":"Mark Ryden",
			"url":" http://www.markryden.com/"
		
		},
		{	
			"name":"Mary Iverson",
			"url":" http://maryiverson.com/"
		
		},
		{	
			"name":"Mel Kadel",
			"url":" http://melkadel.com/"
		
		}
	];
	
	$(".menu li").not(".item-125").remove();

	$(".item-125 a").click(function(e){
		e.preventDefault();
		$("#newMenu").toggleClass("hidden");
	
	});

	$("<ul class='hidden' id='newMenu'/>").appendTo(".item-125");
		
	
	$.each(gallery, function(index, artist){
	
		var artistATag = "<a href='"+artist.url+"' >"+artist.name+"</a>";
		var listItem = "<li>"+artistATag+"</li>";
		$(listItem).appendTo("#newMenu");
	
	});
	
	
	
	console.log(gallery);
	
	

});
