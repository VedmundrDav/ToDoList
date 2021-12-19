var inputText = document.getElementById("item-text");
var addBtn = document.getElementById("item-button");
var list = document.getElementById("list");
var item = document.getElementsByTagName("li");
 
function createItem() {
    if (!inputText.value == "") {
        var delBtn = document.createElement("button");
        delBtn.innerHTML = "X"
        delBtn.id = "del-btn";
        var li = document.createElement("li"); //creates a li element
        li.appendChild(delBtn);
        li.appendChild(document.createTextNode(inputText.value)); //sets text of input ot the li element


        list.appendChild(li); //adds li element to the ul
        inputText.value = ""; //resets the input field

        delBtn.onclick = function () {
            //delete the li
            list.removeChild(li);
        }
    }else{
        alert("Enter something to do!");
    }

    //need to add a button that deletes the row too

}


