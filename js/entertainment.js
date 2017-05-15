
	var myImage3 = document.getElementById("myPhoto3");
	var imageArray3  = [
							"url('img/entertainment/entertainment (1).jpg')", "url('img/entertainment/entertainment (2).jpg')", 
							"url('img/entertainment/entertainment (3).jpg')", "url('img/entertainment/entertainment (4).jpg')",
							"url('img/entertainment/entertainment (5).jpg')", "url('img/entertainment/entertainment (6).jpg')",
							"url('img/entertainment/entertainment (7).jpg')", "url('img/entertainment/entertainment (8).jpg')",
							"url('img/entertainment/entertainment (9).jpg')", "url('img/entertainment/entertainment (10).jpg')",
							"url('img/entertainment/entertainment (11).jpg')", "url('img/entertainment/entertainment (12).jpg')"
						];	
	var imageIndex3 = 1;




	function changeImage3 (){
			myImage3.setAttribute("style", "background-image: " +  imageArray3[imageIndex3]);
			imageIndex3++;
			if(imageIndex3>=imageArray3.length){
				imageIndex3=1;
			}
		}

		var intervalHandle = setInterval(changeImage3, 7000);
