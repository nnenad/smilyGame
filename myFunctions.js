var numOfMoves = 0;
var numLevel;
function setImages()
	{
		var img = "url(2r.jpg)"
		var xy = (numLevel + 1);
		for (var i=1;i<xy;i++)
		{
			for (var j=1;j<xy;j++)
			{ 
				var id = i+""+j;
				var el = document.getElementById(id);
				el.style.backgroundImage = img;
			}
		}
	numOfMoves = 0;
	document.getElementById("numberOfMoves").innerHTML =  numOfMoves;
	}
	
	
function checkWin(){
	var win = false;
	for (var i=1;i<numLevel + 1;i++)
	{
		for (var j=1;j<numLevel + 1;j++)
		{ 
		var id = i+""+j;
			var el = document.getElementById(id);
			var image = el.style.backgroundImage;
			if(image.match("2r.jpg")){
				return;
			}
		}
	}
	
		alert('Broj poteza: '+ numOfMoves);
		setImages();
	
}
function revert(id){

	var x = id.substr(0,1);
	var y = id.substr(1,2);
	
	var xN = new Number(x);;
	var yN = new Number(y);;
	
	var xBr = xN + 1;
	var yBr = yN;
	var el = document.getElementById(xBr+""+yBr);
	if(el)
	{
		changePicture(el);
	}
	
	var xBr = xN - 1 ;
	var yBr = yN;
	var el = document.getElementById(xBr+""+yBr);
	if(el)
	{
		changePicture(el);
	}
	
	var xBr = xN;
	var yBr = yN + 1;
	var el = document.getElementById(xBr+""+yBr);
	if(el)
	{
		changePicture(el);
	}
	
	var xBr = xN;
	var yBr = yN - 1;
	var el = document.getElementById(xBr+""+yBr);
	if(el)
	{
		changePicture(el);
	}
	
	var xBr = xN;
	var yBr = yN;
	var el = document.getElementById(xBr+""+yBr);
	if(el)
	{
		changePicture(el);
	}
	
	numOfMoves++;
	document.getElementById("numberOfMoves").innerHTML =  numOfMoves;
	checkWin();
}

function changePicture(el){
	var image = el.style.backgroundImage;
	if(image.match("2r.jpg")){
		el.style.backgroundImage = "url(1r.jpg)"
	}else{
		el.style.backgroundImage = "url(2r.jpg)"
	}
	
}
function loadLevel(level){
	var levelN = new Number(level);;
	numLevel = levelN;
	
	if(levelN != 1 && levelN > 4 && levelN < 9){
	
	document.write("<head><link type='text/css' rel='stylesheet' href='style.css'>");
	document.write("<script src='myFunctions.js'></script></head>");
	document.write("<div id='container'>");
	for(var i = 1; i < (levelN+1); i++)
	{
		for(var j = 1; j < (levelN+1); j++)
		{
			document.write("<div class=\"cell\" onclick=\"revert(\'"+i+""+j+"\')\" id=\""+i+""+j+"\"></div>");
		}
	}

	document.write("<a onclick=\"setImages()\" id=\"button\">reset</a><div id=\"movesCont\">moves:<span id=\"numberOfMoves\">0</span></div>");
	document.write("</div>");
	document.getElementById('container').style.height = ((levelN * 45) + 5);
	document.getElementById('container').style.width = ((levelN * 45) + 15);
	var body = document.getElementsByTagName("body")[0];
	body.addEventListener("load", setImages(), false);
	}
}
