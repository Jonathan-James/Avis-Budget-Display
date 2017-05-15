	
	var myImage2 = document.getElementById("myPhoto2");
	var imageArray2  = [
							"url('img/avis/avis (1).jpg')", "url('img/avis/avis (2).jpg')", 
							"url('img/avis/avis (3).jpg')", "url('img/avis/avis (4).jpg')",
							"url('img/avis/avis (5).jpg')", "url('img/avis/avis (6).jpg')",
							"url('img/avis/avis (7).jpg')", "url('img/avis/avis (8).jpg')",
							"url('img/avis/avis (9).jpg')", "url('img/avis/avis (10).jpg')",
							"url('img/avis/avis (11).jpg')", "url('img/avis/avis (12).jpg')",
							"url('img/avis/avis (13).jpg')", "url('img/avis/avis (14).jpg')",
							"url('img/avis/avis (15).jpg')", "url('img/avis/avis (16).jpg')",
							"url('img/avis/avis (17).jpg')", "url('img/avis/avis (18).jpg')",
							"url('img/avis/avis (19).jpg')", "url('img/avis/avis (20).jpg')",
							"url('img/avis/avis (21).jpg')", "url('img/avis/avis (22).jpg')",
							"url('img/avis/avis (23).jpg')", "url('img/avis/avis (24).jpg')",
							"url('img/avis/avis (25).jpg')", "url('img/avis/avis (26).jpg')",
							"url('img/avis/avis (27).jpg')", "url('img/avis/avis (28).jpg')",
							"url('img/avis/avis (29).jpg')", "url('img/avis/avis (30).jpg')",
							"url('img/avis/avis (31).jpg')", "url('img/avis/avis (32).jpg')",
							"url('img/avis/avis (33).jpg')", "url('img/avis/avis (34).jpg')",
							"url('img/avis/avis (35).jpg')", "url('img/avis/avis (36).jpg')"
						];
	var imageIndex2 = 1;




	function changeImage2 (){
			myImage2.setAttribute("style", "background-image: " +  imageArray2[imageIndex2]);
			imageIndex2++;
			if(imageIndex2>=imageArray2.length){
				imageIndex2=1;
			}
		}

		var intervalHandle = setInterval(changeImage2, 6000);
