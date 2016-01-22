
	var myImage = document.getElementById("myPhoto1");
	var imageArray  =["url('img2/powells.jpg')", "url('img2/mult.jpg')", "url('img2/opal.jpg')"];
	var imageIndex = 0;




	function changeImage (){
			myImage.setAttribute("style", "background-image: " +  imageArray[imageIndex]);
			imageIndex++;
			if(imageIndex>=imageArray.length){
				imageIndex=0;
			}
		}

		var intervalHandle = setInterval(changeImage, 500);

	