/*
    Do the following steps in this file, and make sure this file is linked to the shopping-list.html file

    

    1. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
    
    
    2. Create a function that will run in response to the button being clicked.
    
    
    
    3. Inside the function body, start off by storing the current value of the input element in a variable.
    
    
    
    4. Next, empty the input element by setting its value to an empty string — ''.
    
    
    
    5. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
    
    
    
    6. Append the span and the button as children of the list item.
    
    
    
    7. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    
    
    
    8. Append the list item as a child of the list.
    
    
    
    9. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
    
    
    
    10. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.

*/

var list = document.getElementsByName("ul");
var input = document.getElementsByTagName("input");
var btn = document.getElementsByTagName("button");
var items = document.createElement("li");




function start() { 
    document.getElementsByTagName("button")[0].setAttribute("id", "btn");
    document.getElementsByTagName("button")[0].setAttribute("onclick", "Clicked(btn)");
    document.getElementsByTagName("ul")[0].setAttribute("id", "ul");
    list.value = 0;
    node0 = document.createTextNode("");
    items.appendChild(node0);
    console.log(list);
};

function Clicked() {
    console.log(item.value);

    var text = item.value;
    console.log("text = " + text);
    var items = document.createElement("li");
    var span = document.createElement("span");
    var button = document.createElement("button");

    var node = document.createTextNode(text);
    console.log("node = " + node);
    items.appendChild(node);
    item.value = "";
    document.getElementById("ul").appendChild(items);


}

window.onload = function () {
    start(document.body)
};
