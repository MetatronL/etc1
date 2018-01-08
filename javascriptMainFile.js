function loadImages(){
	var list = [];
	
	list[0]	= [ 1 , 2 , 3 , 4 , 5 , 18 ];	
	list[1] = [ 6 , 7 , 8 , 9 , 16 , 17 , 19 ];	
	list[2] = [ 11 , 12 , 13 , 14 , 15 , 10 ];	
	
	for(var i=0; i < 3; ++i){
		var current_column =  document.getElementById("column_" + i);
		for(var j = 0 ; j < list[i].length; ++j ){
			var newImage = document.createElement("IMG");
			var textnode = document.createTextNode("Image"); 
			newImage.appendChild(textnode); 
			newImage.src = "animal/" + list[i][j] + ".jpg";
			newImage.className = "img1";
			newImage.setAttribute("alt","Hovered over image");
			current_column.appendChild(newImage);
		}
	}
}