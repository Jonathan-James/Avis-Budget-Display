//Updates that need to happen
	//- Code needs to be object oriented, stop using 6 different Javascript files 
		//(getElementById('myPhoto') should update from an array)
 	//- image files need to be pulled directly from folders, maybe a folder array?
	//- Implement video playing feature
	//- Fix image display size


	var myImage = document.getElementById("myPhoto1");
	var imageArray  =["url('img2/gorge.jpg')", "url('img2/mult.jpg')", "url('img2/opal.jpg')", "url('img2/mthood.jpg')"];
	var imageIndex = 0;




	function changeImage (){
			myImage.setAttribute("style", "background-image: " +  imageArray[imageIndex]);
			imageIndex++;
			if(imageIndex>=imageArray.length){
				imageIndex=0;
			}
		}

		var intervalHandle = setInterval(changeImage, 500);

		



	