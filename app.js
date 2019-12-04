(function(){
	var inputItem = document.getElementById("item");
	inputItem.onkeyup = function(e) {
		if(e.keyCode == 13){
	     addItem();
		}
	}

	function addItem(){
	  var item = document.querySelector("#item").value;
	  if(!item) return;
	  var ul = document.querySelector("#list");
	  var li = document.createElement('li');
	  li.appendChild(document.createTextNode(item));
	  ul.appendChild(li);
	  document.querySelector("#item").value = "";
      li.onclick = deleteIdem;
	
	}

	function deleteIdem(e){
	  var ul = document.querySelector("#list");
	  ul.removeChild(e.target);
	}
}());
