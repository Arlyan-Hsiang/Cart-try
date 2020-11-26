//For Size selection
let buttonS = document.getElementById('S-size');
let buttonM = document.getElementById('M-size');
let buttonL = document.getElementById('L-size');
let buttonOK = document.getElementById('comfirm');
//for variable number
let mySize = document.querySelector('table tr td i1');
let myAmount = document.querySelector('h1 a1');
//for calculation
let amount = 0;
//While click Size S
buttonS.onclick = function() {
        mySize.innerHTML = 'S';
    }
    //While click Size M
buttonM.onclick = function() {
        mySize.innerHTML = 'M';

    }
    //While click Size L
buttonL.onclick = function() {
        mySize.innerHTML = 'L';
    }
    //While click "Comfirm"
buttonOK.onclick = function() {
    if (mySize.innerHTML == 'S' ||
        mySize.innerHTML == 'M' ||
        mySize.innerHTML == 'L') {
        amount++;
        myAmount.innerHTML = amount.toString();
    } else {
        alert('Please choose your size.')
    }

}