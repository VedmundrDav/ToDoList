var inputText = document.getElementById("item-text");
var addBtn = document.getElementById("item-button");
var list = document.getElementById("list");
var item = document.getElementsByTagName("li");
var isDone = false;
function createItem() {
    if (!inputText.value == "") {
        var delBtn = document.createElement("button");
        //delBtn.innerHTML = "X"
        delBtn.innerHTML = '<img src = "images/delete.png" id = "del-icon"/>';
        delBtn.id = "del-btn";

        var li = document.createElement("li"); //creates a li element
        li.appendChild(delBtn);
        li.appendChild(document.createTextNode(inputText.value));
        li.id = "li-item"; //sets text of input ot the li element
        li.onclick = function(){
            if(isDone == false){
                li.style.border = "solid";
                li.style.backgroundColor = "lightgreen";
                li.style.setProperty("text-decoration", "line-through");
                isDone = true;
            }else{
                li.style.border = "none";
                li.style.backgroundColor = "khaki";
                li.style.setProperty("text-decoration", "none");
                isDone = false;
            }
        }

        list.appendChild(li); //adds li element to the ul
        inputText.value = ""; //resets the input field

        delBtn.onclick = function () {
            //delete the li
            list.removeChild(li);
        }
    }else{
        alert("Enter something to do!");
    }
}

function editItem(item){
    var newText = "";
    
}


