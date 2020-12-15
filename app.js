//For Size selection
const buttonS = document.getElementById('S-size');
const buttonM = document.getElementById('M-size');
const buttonL = document.getElementById('L-size');
const buttonOK = document.getElementById('comfirm');
const cartButton = document.getElementById('button');
const cartPreview = document.getElementById('cart-preview');
//for variable number
let mySize = document.querySelector('table tr td i1');
let myAmount = document.querySelector('a a1');
//for calculation
let totalAmount = 0;
let AmountS = 0;
let AmountM = 0;
let AmountL = 0;
let sizeAmount = {};
//Array for cart
let product = new Array();
let proContent = '';

//size choose
buttonS.onclick = function() {
    mySize.innerHTML = 'S';
}
buttonM.onclick = function() {
    mySize.innerHTML = 'M';
}
buttonL.onclick = function() {
        mySize.innerHTML = 'L';
}
//confirm for adding to the cart
buttonOK.onclick = function() {
        calAmount(mySize.innerHTML);
        myAmount.innerHTML = totalAmount.toString();
        proContent = cartPreview.querySelectorAll('p');
        buildPreview();
}
//When press the cart, there is a preview.
cartButton.onclick = function() {
        cartPreview.classList.toggle('Active');
}
//function for calculating the amount of t-shirt 
function calAmount(mySize) {
    //if there is no correnspond size, add it in the array
    if (product.indexOf(mySize) < 0) {
        product.push(mySize);
        console.log(product);
    }
    console.log(sizeAmount);
    switch (mySize) {
        case 'S':
            totalAmount++;
            AmountS++;
            sizeAmount['S'] = AmountS;
            break;
        case 'M':
            totalAmount++;
            AmountM++;
            sizeAmount['M'] = AmountM;
            break;
        case 'L':
            totalAmount++;
            AmountL++;
            sizeAmount['L'] = AmountL;
            break;
        default:
            alert('Please choose your size.');
            break;
    }

}
//for cart preview
function buildPreview() {
    const plength = product.length;
    if (plength > 0) {
        for (let i = 0; i < plength; i++) {
            proContent[i].innerHTML = "<table class='cart'><tr><td><img class= 'cart' src='images/tee.jpg'></td><td>" +
                "Class Tee<br>" + sizeAmount[product[i]] + " x $100<br>" +
                "Size " + product[i] + "</td>";
        }
    } 
    else {
        alert('nothing inside your cart.');
    }
}
