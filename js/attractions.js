
	var myImage = document.getElementById("myPhoto1");
	var imageArray  =[
							"url('img/attractions/attraction (1).jpg')", "url('img/attractions/attraction (2).jpg')", 
							"url('img/attractions/attraction (3).jpg')", "url('img/attractions/attraction (4).jpg')",
							"url('img/attractions/attraction (5).jpg')", "url('img/attractions/attraction (6).jpg')",
							"url('img/attractions/attraction (7).jpg')", "url('img/attractions/attraction (8).jpg')",
							"url('img/attractions/attraction (9).jpg')", "url('img/attractions/attraction (10).jpg')",
							"url('img/attractions/attraction (11).jpg')", "url('img/attractions/attraction (12).jpg')",
							"url('img/attractions/attraction (13).jpg')", "url('img/attractions/attraction (14).jpg')",
							"url('img/attractions/attraction (15).jpg')", "url('img/attractions/attraction (16).jpg')",
							"url('img/attractions/attraction (17).jpg')", "url('img/attractions/attraction (18).jpg')",
							"url('img/attractions/attraction (19).jpg')", "url('img/attractions/attraction (20).jpg')",
							"url('img/attractions/attraction (21).jpg')", "url('img/attractions/attraction (22).jpg')",
							"url('img/attractions/attraction (23).jpg')", "url('img/attractions/attraction (24).jpg')",
							"url('img/attractions/attraction (25).jpg')", "url('img/attractions/attraction (26).jpg')",
							"url('img/attractions/attraction (27).jpg')", "url('img/attractions/attraction (28).jpg')",
							"url('img/attractions/attraction (29).jpg')", "url('img/attractions/attraction (30).jpg')",
							"url('img/attractions/attraction (31).jpg')", "url('img/attractions/attraction (32).jpg')",
							"url('img/attractions/attraction (33).jpg')", "url('img/attractions/attraction (34).jpg')",
							"url('img/attractions/attraction (35).jpg')", "url('img/attractions/attraction (36).jpg')"
						];
	var imageIndex = 1;




	function changeImage (){
			myImage.setAttribute("style", "background-image: " +  imageArray[imageIndex]);
			imageIndex++;
			if(imageIndex>=imageArray.length){
				imageIndex=1;
			}
		}

		var intervalHandle = setInterval(changeImage, 1000);

		



	