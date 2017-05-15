
	var myImage6 = document.getElementById("myPhoto6");
	var imageArray6  = [
							"url('img/show/show (1).jpg')", "url('img/show/show (2).jpg')", 
							"url('img/show/show (3).jpg')", "url('img/show/show (4).jpg')",
							"url('img/show/show (5).jpg')", "url('img/show/show (6).jpg')",
							"url('img/show/show (7).jpg')", "url('img/show/show (8).jpg')",
							"url('img/show/show (9).jpg')", "url('img/show/show (10).jpg')",
							"url('img/show/show (11).jpg')", "url('img/show/show (12).jpg')",
							"url('img/show/show (13).jpg')", "url('img/show/show (14).jpg')",
							"url('img/show/show (15).jpg')", "url('img/show/show (16).jpg')",
							"url('img/show/show (17).jpg')", "url('img/show/show (18).jpg')",
							"url('img/show/show (19).jpg')", "url('img/show/show (20).jpg')",
							"url('img/show/show (21).jpg')", "url('img/show/show (22).jpg')",
							"url('img/show/show (23).jpg')", "url('img/show/show (24).jpg')",
							"url('img/show/show (25).jpg')", "url('img/show/show (26).jpg')",
							"url('img/show/show (27).jpg')", "url('img/show/show (28).jpg')",
							"url('img/show/show (29).jpg')", "url('img/show/show (30).jpg')",
							"url('img/show/show (31).jpg')", "url('img/show/show (32).jpg')",
							"url('img/show/show (33).jpg')", "url('img/show/show (34).jpg')",
							"url('img/show/show (35).jpg')", "url('img/show/show (36).jpg')"
						];
	var imageIndex6 = 1;




	function changeImage6 (){
			myImage6.setAttribute("style", "background-image: " +  imageArray6[imageIndex6]);
			imageIndex6++;
			if(imageIndex6>=imageArray6.length){
				imageIndex6=1;
			}
		}

		var intervalHandle = setInterval(changeImage6, 10000);
