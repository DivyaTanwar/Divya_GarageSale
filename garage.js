function checkout() {

    let name = (document.getElementById("full_name").value).trim();
    if (name == "") {
        document.getElementById("error_name").innerHTML = ("Name must be filled out");
    } else {
        document.getElementById("error_name").innerHTML = "";
    }


    let email = (document.getElementById("email_address").value).trim();
    if (email == "") {
        document.getElementById("error_email").innerHTML = ("email must be filled out");
    } else {
        document.getElementById("error_email").innerHTML = "";
    }


    let credit_card_number = document.getElementById("credit_card_number").value;
    var credit_card_numberRegEx = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    if (credit_card_numberRegEx.test(credit_card_number)) {
        document.getElementById("error_credit_card_number").innerHTML = "";
    } else {
        document.getElementById("error_credit_card_number").innerHTML = "Please enter card number in 1234-1234-1234-1234 format";
    }


    let credit_card_expiry_date = document.getElementById("credit_card_expiry_date").value;
    var credit_card_expiry_dateRegEx = /^(0?[1-9]|1[012])-[2][2-9]$/;
    if (credit_card_expiry_dateRegEx.test(credit_card_expiry_date)) {
        document.getElementById("error_credit_card_expiry_date").innerHTML = "";
    } else {
        document.getElementById("error_credit_card_expiry_date").innerHTML = "Please enter expiry date in 02-12 format";
    }


    let credit_card_cvv = document.getElementById("credit_card_cvv").value;
    var credit_card_cvvRegEx = /^[0-9]{3}$/;
    if (credit_card_cvvRegEx.test(credit_card_cvv)) {
        document.getElementById("error_cvv").innerHTML = "";
    } else {
        document.getElementById("error_cvv").innerHTML = "Please enter cvv in 123 format";
    }


    console.log(`Name : ${name}
\n Email : ${email} 
\n Credit Card Number : ${credit_card_number} 
\n Credit Card Expiry Date : ${credit_card_expiry_date} 
\n CVV : ${credit_card_cvv}`);

    return false;
}

var cart = [];
var customername = "";
var subtotalamount = 0;
var tax = 0;
var total = 0;

function add(name, price) {
    var quantity = Number(prompt('How many woud you like to buy?'));

    if (!Number.isNaN(quantity)) {
        if (quantity > 0) {
            cart.push({
                name: name,
                quantity: quantity,
                price: price
            });

            updatecart();

            alert(`${quantity} ${name}(s) were added to the cart`);
        } else {
            alert("Minimum 1 item please");
        }
    } else {
        alert("Please provide a valid input");
    }

}

function updatecart() {
    var cartitemselement = document.querySelector(".cart-items");
    let name1 = (document.getElementById("full_name").value).trim();
    document.getElementById("name_print").innerHTML = `<b>Name: </b>${name1}`;
    let email1 = (document.getElementById("email_address").value).trim();
    document.getElementById("email_print").innerHTML = `<b>Email: </b>${email1}`;
    let card1 = (document.getElementById("credit_card_number").value).trim();
    const ldigits = card1.split('-');

    document.getElementById("card_print").innerHTML = `<br><b>Credit Card: </b>****-****-****-${ldigits[3]}`;
    cartitemselement.innerHTML = "";

    subtotalamount = 0;
    cart.forEach(item => {
        cartitemselement.innerHTML += `<span class="cart-row">
        <span class="cart-item cart-column">${item.name}</span>
        <span class="cart-price cart-column">${item.price}</span>
        <span class="cart-quantity cart-column">${item.quantity}</span>
        </span>`;
        subtotalamount = subtotalamount + (item.price * item.quantity);
    });

    tax = subtotalamount * 0.13;
    total = subtotalamount + tax;
    donation = (subtotalamount / 100) * 10;

    var subtotalfromhtml = document.querySelector("#subtotal-number");
    subtotalfromhtml.innerHTML = subtotalamount;

    var donationfromhtml = document.querySelector("#donation-number");
    donationfromhtml.innerHTML = donation;

    var taxfromhtml = document.querySelector("#tax-number");
    taxfromhtml.innerHTML = tax;

    var grandtotalfromhtml = document.querySelector("#total-number");
    grandtotalfromhtml.innerHTML = total;
}