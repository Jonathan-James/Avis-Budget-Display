
	var myImage5 = document.getElementById("myPhoto5");
	var imageArray5  = [
							"url('img/policy/policy (1).png')", "url('img/policy/policy (2).png')", 
							"url('img/policy/policy (3).png')", "url('img/policy/policy (4).png')",
							"url('img/policy/policy (5).png')", "url('img/policy/policy (6).png')",
							"url('img/policy/policy (7).png')"
						];
	var imageIndex5 = 1;




	function changeImage5 (){
			myImage5.setAttribute("style", "background-image: " +  imageArray5[imageIndex5]);
			imageIndex5++;
			if(imageIndex5>=imageArray5.length){
				imageIndex5=1;
			}
		}

		var intervalHandle = setInterval(changeImage5, 9000);
