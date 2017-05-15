
	var myImage4 = document.getElementById("myPhoto4");
	var imageArray4  = [
							"url('img/event/event (1).jpg')", "url('img/event/event (2).jpg')", 
							"url('img/event/event (3).jpg')", "url('img/event/event (4).jpg')",
							"url('img/event/event (5).jpg')", "url('img/event/event (6).jpg')",
							"url('img/event/event (7).jpg')", "url('img/event/event (8).jpg')",
							"url('img/event/event (9).jpg')", "url('img/event/event (10).jpg')",
							"url('img/event/event (11).jpg')", "url('img/event/event (12).jpg')",
							"url('img/event/event (13).jpg')", "url('img/event/event (14).jpg')",
							"url('img/event/event (15).jpg')", "url('img/event/event (16).jpg')",
							"url('img/event/event (17).jpg')", "url('img/event/event (18).jpg')",
							"url('img/event/event (19).jpg')", "url('img/event/event (20).jpg')",
							"url('img/event/event (21).jpg')"
						];
	var imageIndex4 = 1;




	function changeImage4 (){
			myImage4.setAttribute("style", "background-image: " +  imageArray4[imageIndex4]);
			imageIndex4++;
			if(imageIndex4>=imageArray4.length){
				imageIndex4=1;
			}
		}

		var intervalHandle = setInterval(changeImage4, 8000);
