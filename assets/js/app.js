
(function menu(){
	var miIcono = document.getElementById("barra-menu");
	var miMenu = document.getElementById("cont-menu-res");

	//Home
		var menuHome = document.createElement("div");
		menuHome.setAttribute("class","option-res");
		var textHome = document.createTextNode("Home");
		menuHome.appendChild(textHome);

		//About
		var menuAbout = document.createElement("div");
		menuAbout.setAttribute("class","option-res");
		var textAbout = document.createTextNode("About");
		menuAbout.appendChild(textAbout);

		//Product
		var menuProduct = document.createElement("div");
		menuProduct.setAttribute("class","option-res");
		var textProduct = document.createTextNode("Product");
		menuProduct.appendChild(textProduct);

		//Services
		var menuServices = document.createElement("div");
		menuServices.setAttribute("class","option-res");
		var textServices = document.createTextNode("Services");
		menuServices.appendChild(textServices);

		//Customers
		var menuCustomers = document.createElement("div");
		menuCustomers.setAttribute("class","option-res");
		var textCustomers = document.createTextNode("Customers");
		menuCustomers.appendChild(textCustomers);

		//Contact
		var menuContact = document.createElement("div");
		menuContact.setAttribute("class","option-res");
		var textContact = document.createTextNode("Contact");
		menuContact.appendChild(textContact);

		miMenu.appendChild(menuHome);
		miMenu.appendChild(menuAbout);
		miMenu.appendChild(menuProduct);
		miMenu.appendChild(menuServices);
		miMenu.appendChild(menuCustomers);
		miMenu.appendChild(menuContact);

	miIcono.addEventListener("click",function(){
		miMenu.classList.toggle("hide");
	});
})();