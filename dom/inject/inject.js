/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

// So, if I'm reading the instructions right, the code at the top prints the correct order, but isn't allowed.
// The bottom is more in line with what the instructions say, but doesn't quite accomplish the task at hand.

//function Injection() {
//	var inject = document.getElementById("inject");
//	inject.innerHTML += "<h1><i>HTML Practice Exercise TEKcamp.</i></h1>"
//		+ "<h2><a href=''>TEKsystems 'TEKcamp'</a></h2>"
//		+ "<hr /> "
//		+ "<p>I love <i>HTML</i> for the following reasons:</p> "
//		+ "<ol> "
//		+ "< li > I learned it quickly.</li > "
//		+ "  <li>I can make web pages using code "
//		+ "<li> Its fun.</li>"
//		+ "</ol >  "
//		+ "<hr /> "
//		+ "<p>My instructors email address is: <a href='mailto: ayunas@teksystems.com'>ayunas@teksystems.com</a>.</p> "
//		+ " <h1>Have a great day!</h1>  I really look forward to learning how to code!  Have a great day. "
//		+ " -[Team 'Giter Done']"
//};

function injecting() {
	var h1 = document.createElement("h1");
	var h2 = document.createElement("h2");
	var p1 = document.createElement("p");
	var p2 = document.createElement("p");
	var ol = document.createElement("ol");

	var node1 = document.createTextNode("HTML Practice Exercise TEKcamp");
	var node2 = document.createTextNode("TEKsystems 'TEKcamp'");
	var node3 = document.createTextNode("I love " + "HTML " + "for the following reasons:");
	

	function createIl(text) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(text));
		return li;
	}

	var lis = [
		createIl("I learned it quickly"),
		createIl("I can make web pages using code"),
		createIl("It's fun")
	];

	var lisFrag = document.createDocumentFragment();
	for (var i = 0; i < lis.length; i++) {
		lisFrag.appendChild(lis[i]); 
	}

	document.body.appendChild(lisFrag); 

	var node4 = document.createTextNode("My instructors email address is: ayunas@teksystems.com.  really look forward to learning how to code!  Have a great day.");

	h1.appendChild(node1);
	h2.appendChild(node2);
	p1.appendChild(node3);
	p2.appendChild(node4);

	var inject = document.getElementById("inject");

	inject.appendChild(h1);
	inject.appendChild(h2);
	inject.appendChild(p1);
	inject.appendChild(ol);
	inject.appendChild(p2);

	ol.insertBefore(p2, null)
}


