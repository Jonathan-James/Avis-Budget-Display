
	var myImage = document.getElementById("myPhoto");
	var imageArray=["img/bulb.png", "img/char.jpg", "img/squirt.png"];
	var imageIndex=0;

	function changeImage (){
			myImage.setAttribute("src", imageArray [imageIndex]);
			imageIndex++;
			if(imageIndex>=imageArray.length){
				imageIndex=0;
			}
		}

		var intervalHandle = setInterval(changeImage, 1000);

		myPhoto.onclick=function(){

			clearInterval(intervalHandle);
		}