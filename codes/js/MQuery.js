//$()   参数
/*
	函数      window.onload
	string   id  class  TagName
	对象  window this document
*/

//跨浏览器添加事件
function addEvent(obj, type, fn){
	if(obj.addEventListener){
		obj.addEventListener(type, function(ev){
			if(fn.call(obj) ==  false){
				//阻止事件冒泡和默认事件
				ev.stopPropagation();
				ev.preventDefault();
			}
		}, false);
	}else if(obj.attachEvent){ //IE this传递不过去  去重
		obj.attachEvent("on" + type, function(){
			if(fn.call(obj) == false){
				event.cancelBubble = true;
				return false;
			}
		});
	}
}

//跨浏览器删除事件
function removeEvent(obj, type, fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type, fn);
	}else if(obj.detachEvent){
		obj.detachEvent("on" + type, fn);
	}
}


//$()  选择器
function MQuery(vArg){
	//用来保存选中的元素节点
	this.elements = [];
	switch(typeof vArg)
	{
		case "function":
			// window.onload = vArg;
			addEvent(window, "load", vArg);
			break;
		case "string":
			switch(vArg.charAt(0))
			{
				case "#": //id
					var obj = document.getElementById(vArg.substring(1));
					this.elements.push(obj);
					break;
				case ".": //class
					this.elements = getByClass(document, vArg.substring(1));
					break;
				default: //tagName
				    this.elements = document.getElementsByTagName(vArg);
				    break;
			}
			break;
		case "object":
			this.elements.push(vArg);
			break;
	}
}



function getByClass(oParent, sClass){
	//获取页面上所有的节点对象
	var aEle = oParent.getElementsByTagName("*");
	var aResult = []; //装合格的对象
	for(var i = 0; i < aEle.length; i++){
		if(aEle[i].className == sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}


function $(vArg){
	return new MQuery(vArg);
}


MQuery.prototype.click = function(fn){
	for(var i = 0; i < this.elements.length; i++){
		addEvent(this.elements[i], "click", fn);
	}
	return this;
}

MQuery.prototype.show = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = "block";
	}
	return this;
}

MQuery.prototype.hide = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = "none";
	}
	return this;
}

//hover  同时添加mouseover 和out事件  参数两个函数 封装
MQuery.prototype.hover = function(fnOver, fnOut){
	for(var i = 0; i < this.elements.length; i++){
		addEvent(this.elements[i], "mouseover", fnOver);
		addEvent(this.elements[i], "mouseout", fnOut);
	}
	return this;
}


MQuery.prototype.css = function(attr, value){
	if(arguments.length == 2){ //设置样式
		for(var i = 0; i < this.elements.length; i++){
			this.elements[i].style[attr] = value;
		}
	}else{
		//string  json
		if(typeof attr == "string"){
			return getStyle(this.elements[0], attr);
		}else{//json
			for(var i = 0; i < this.elements.length; i++){
				for(var key in attr){
					this.elements[i].style[key] = attr[key];
				}
			}
		}
	}
	return this;
}

/*获取当前样式的方法*/
function getStyle(element, style){
	if(element.currentStyle){
		return element.currentStyle[style];
	}else{
		return getComputedStyle(element)[style];
	}
}


MQuery.prototype.toggle = function(){
	//arguments和this一样复杂,一样容易出错

	var _arguments = arguments;
	for(var i = 0; i < this.elements.length; i++){
		addToggle(this.elements[i]);
	}

	function addToggle(obj){
		var count = 0;
		addEvent(obj, "click", function(){
			_arguments[count++ % _arguments.length].call(obj);
		})
	}
	return this;
}


MQuery.prototype.attr = function(attr, value){
	if(arguments.length == 2){
		for(var i = 0; i < this.elements.length; i++){
			this.elements[i][attr] = value;
		}
	}else{
		return this.elements[0][attr];
	}
	return this;
}


MQuery.prototype.eq = function(n){
	return $(this.elements[n]); //必须返回MQuery的对象
}


MQuery.prototype.find = function(str){
//class tagName
	var aResult = [];
	for(var i = 0; i < this.elements.length; i++){
		switch(str.charAt(0))
		{
			case ".": //class
				var aEle = getByClass(this.elements[i], str.substring(1));
				aResult = aResult.concat(aEle);
				break;
			default:
				//标签
				var aEle = this.elements[i].getElementsByTagName(str);
				// aResult = aResult.concat(aEle);
				appendArr(aResult, aEle);
				break;
		}	
	}
	var newMQuery = $();
	newMQuery.elements = aResult;
	return newMQuery;
}

function appendArr(arr1, arr2){
	for(var i = 0; i < arr2.length; i++){
		arr1.push(arr2[i]);
	}
}


function getIndex(obj){
	var aBrother = obj.parentNode.children; //拿到没有空白节点的子节点
	for(var i = 0; i < aBrother.length; i++){
		if(aBrother[i] == obj){
			return i;
		}
	}
}

MQuery.prototype.index = function(){
	return getIndex(this.elements[0]);
}


MQuery.prototype.bind = function(sEv, fn){
	for(var i = 0; i < this.elements.length; i++){
		addEvent(this.elements[i], sEv, fn);
	}
}

MQuery.prototype.extend = function(name, fn){
	MQuery.prototype[name] = fn;
}


















