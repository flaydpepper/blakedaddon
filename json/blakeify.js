var blakePrefix = "blake";
var blakeCount = 20;

function getblake(){
	var blakeNum = Math.floor(Math.random()*blakeCount);
	return "images/"+blakePrefix+blakeNum+".jpg";
}

function replaceImages(){
	Array.prototype.map.call(document.images,function(img){
		//don't re-blake images
		if(img.className.indexOf('blaked')>-1){
			return;
		}
		img.classList.add('blaked');
		//retain the original dimensions
		var width = img.width;
		var height = img.height;
		img.style.width = width+'px';
		img.style.height = height+'px';

		var loc = chrome.extension.getURL(getblake());
		img.src = loc;
		if(img.srcset){
			img.srcset = loc;
		}
	});
}

window.setTimeout(replaceImages,1000);
document.body.addEventListener('click',function(){
	replaceImages();
});
