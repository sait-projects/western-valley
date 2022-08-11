window.onload=initfunction;

function initfunction()
{
    //date formatting	
	var current_datetime = new Date()
	var formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()

	document.getElementById("dtfield").innerHTML = formatted_date;
}

function validateFirst() {
    var firstName = document.getElementById("firstName").value;
    var isName = isNaN(firstName);
    if (isName == false) {
        document.getElementById("firstName").classList.add("is-invalid");  
        document.getElementById("firstName").classList.remove("is-valid");
    } else {
        document.getElementById("firstName").classList.add("is-valid"); 
        document.getElementById("firstName").classList.remove("is-invalid");
    }
}

function validateAddress() {
    var address = document.getElementById("address").value;
    var pattern = new RegExp("^[a-zA-Z0-9- ]+$");
    if (pattern.test(address)) {
        document.getElementById("address").classList.add("is-valid");  
        document.getElementById("address").classList.remove("is-invalid");
    } else {
        document.getElementById("address").classList.add("is-invalid"); 
        document.getElementById("address").classList.remove("is-valid");
    }
}

function validatePhone() {
    var telephone = document.getElementById("telephone").value;
    // Regex found here https://stackoverflow.com/questions/9776231/regular-expression-to-validate-us-phone-numbers
    var pattern = new RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{4}$");
    if (pattern.test(telephone)) {
        document.getElementById("telephone").classList.add("is-valid");  
        document.getElementById("telephone").classList.remove("is-invalid");
    } else {
        document.getElementById("telephone").classList.add("is-invalid"); 
        document.getElementById("telephone").classList.remove("is-valid");
    }
}

function validatePostalCode() {
    var postalCode = document.getElementById("postalCode").value;
    var pattern = new RegExp("^[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]$");
    if (pattern.test(postalCode)) {
        document.getElementById("postalCode").classList.add("is-valid");  
        document.getElementById("postalCode").classList.remove("is-invalid");
    } else {
        document.getElementById("postalCode").classList.add("is-invalid"); 
        document.getElementById("postalCode").classList.remove("is-valid");
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var pattern = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z]+[\.][a-zA-Z]{2,}$");
    if (pattern.test(email)) {
        document.getElementById("email").classList.add("is-valid");  
        document.getElementById("email").classList.remove("is-invalid");
    } else {
        document.getElementById("email").classList.add("is-invalid"); 
        document.getElementById("email").classList.remove("is-valid");
    }
}

function add(hampId) {
    var hamperId = hampId;
    var value = parseInt(document.getElementById(hamperId).value);
    value += 1;
    document.getElementById(hamperId).value = value;
}

function minus(hampId) {
    var hamperId = hampId;
    var value = parseInt(document.getElementById(hamperId).value);
    if(value > 0) {
        value -= 1;
        document.getElementById(hamperId).value = value;
    }
}

function onSubmit() {
    var firstName = document.getElementById("firstName").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;

    var vegetable = document.getElementById("hamper1");
    var fruit = document.getElementById("hamper2");
    var chicken = document.getElementById("hamper3");
    var pork = document.getElementById("hamper4");

    var total = 0;
    var message = "";
    var phoneType = "";
    var deliveryMethod = "";

    if(!(firstName == "" || address == "" || phone == "" || email == "")) {
        if(document.getElementById("home").checked == true) {
            phoneType = "Home ";
        } else {
            phoneType = "Bus. ";
        }
    
        if(document.getElementById("pickup").checked == true) {
            deliveryMethod = "Pickup";
        } else {
            deliveryMethod = "Delivery";
        }
        
        message = ("<h5>Customer Information</h5>" + "<hr>")
    
        message = (message + firstName + "<br>" + address + "<br>" + phoneType + phone + "<br>" + email + "<br>" + deliveryMethod + "<br><br>" + "<h5>Order Details</h5> <hr>");
        
        if(parseFloat(vegetable.value) > 0) {
            message = (message + vegetable.value + " " + vegetable.getAttribute("name") + "<br>");
            total += (parseFloat(vegetable.value)*30);
        }
    
        if(parseFloat(fruit.value) > 0) {
            message = (message + fruit.value + " " + fruit.getAttribute("name") + "<br>");
            total += (parseFloat(fruit.value)*20)
        }
    
        if(parseFloat(chicken.value) > 0) {
            message = (message + chicken.value + " " + chicken.getAttribute("name") + "<br>");
            total += (parseFloat(chicken.value)*4)
        }
    
        if(parseFloat(pork.value) > 0) {
            message = (message + pork.value + " Kg " + pork.getAttribute("name") + "<br>");
            total += (parseFloat(pork.value)*5)
        }
    
        message = message + "<br><h5>" + "Total:    $" + total.toFixed(2) + "</h5>"
    
        var order = document.getElementById("orderSection");
    
        if(order.style.display === "none") {
            order.style.display = "block";
        }
    
        document.getElementById("order").innerHTML = message;
    
        document.getElementById("section2").scrollIntoView();
    } else {
        document.getElementById("section2").scrollIntoView();
    }
    
}

