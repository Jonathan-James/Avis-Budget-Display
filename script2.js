
	var myImage2 = document.getElementById("myPhoto2");
	var imageArray2  = ["url('img2/opal.jpg')", "url('img2/mult.jpg')", "url('img2/powells.jpg')"];
	var imageIndex2 = 0;




	function changeImage2 (){
			myImage2.setAttribute("style", "background-image: " +  imageArray2[imageIndex2]);
			imageIndex2++;
			if(imageIndex2>=imageArray2.length){
				imageIndex2=0;
			}
		}

		var intervalHandle = setInterval(changeImage2, 2000);