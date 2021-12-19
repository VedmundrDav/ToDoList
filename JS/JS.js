var inputText = document.getElementById("item-text");
var addBtn = document.getElementById("item-button");
var list = document.getElementById("list");
var item = document.getElementsByTagName("li");
 
function createItem(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputText.value));
    list.appendChild(li);
    inputText.value = "";
}

function addItem(){

}

