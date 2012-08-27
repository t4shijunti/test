function drag(elementToDrag,event){
	var startX = event.clientX, startY = event.clientY;
	var origX = elementToDrag.offsetLeft, origY = elementToDrag.offsetTop;
	var deltaX = startX - origX, deltaY = startY - origY;
	if(document.addEventListener){
		document.addEventListener("mousemove",mouseHandle,true);
		document.addEventListener("mouseup",upHandle,true);
	}else if(document.attachEvent){
		elementToDrag.setCapture();
		elementToDrag.attachEvent("onmousemove",moveHandle);
		elementToDrag.attachEvent("onmouseup",upHandle);
		elementToDrag.attachEvent("onlosecapture",upHandle);
	}else {
		var oldmovehandle = document.onmousemove;
		var olduphandle = document.onmouseup;
		document.onmousemove = moveHandle;
		document.onmouseup = upHandle;	
	}
	if(event.stopPropagation){event.stopPropagation();}
		else event.cancelBubble = true;
	if(event.preventDefault){event.preventDefault();}
		else event.returnValue = false;
	
	function moveHandle(e){
		if(!e){e = window.event;}
		
		elementToDrag.style.left = (e.clientX - deltaX) + "px";
		elementToDrag.style.top = (e.clientY - deltaY) + "px";
		if(e.stopPropagation){e.stopPropagation();}
			else e.cancelBubble = true;
	}
	
	function upHandle(e){
		if(!e){e = window.event}
		if(document.removeEventListener){
			document.removeEventListener("mousemove",moveHandle,true);
			document.removeEventListener("mouseup",upHandle,true);	
		}	else if(document.detachEvent){
			elementToDrag.detachEvent("onmousemove",moveHandle);
			elementToDrag.detachEvent("onmouseup",upHandle);
			elementToDrag.detachEvent("onlosecapture",upHandle);
			elementToDrag.releaseCapture();
		} else {
			document.onmouseup = olduphandle;
			document.onmousemove = oldmovehandle;	
		}
		if(e.stopPropagation){e.stopPropagation();}
			else e.cancelBubble = true;
	}
		
}