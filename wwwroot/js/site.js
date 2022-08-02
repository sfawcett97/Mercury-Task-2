// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const letters = /^[A-Za-z\s\-]+$/;
const regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var nameValid = 0;
var emailValid = 0;
var cardValid = 0;
var submitValue;
var nameValue;
var emailValue;
var cardValue;
var j = 0;

var cSum = [0];
let isSecond = false;
disableSub();



function nameValidation() {
    nameValue = document.getElementById("NameIn").value.trim();   // Whitespace will not be ignored. Inputs containing only spaces will show as invalid.
    if (nameValue.length == 0) {    //Not sure if redundant, leaving in anyway just incase.
        nameValid = 0;
    } else {
        if (nameValue.match(letters)) {
            nameValid = 1;    //Will now allow names containing hyphens. 
        } else {
            nameValid = 0;
        }
    }
    nameCheck();

    console.log("Name: " + nameValue);

}


function emailValidation() {
    emailValue = document.getElementById("EmailIn").value.trim();
    if (emailValue.length == 0) {

        emailValid = 0;
    } else {
        if (emailValue.match(regMail)) {
            emailValid = 1;
        } else {
            emailValid = 0;
        }
    }
    emailCheck();
    console.log("Email: " + emailValue);
}


function cardValidation() {
    var cTotal = 0;

    j = 0;
    cardValue = document.getElementById("CardIn").value.trim();
    if ((cardValue.length >= 16) && (cardValue.length <= 19)) {


        for (let i = (document.getElementById("CardIn").value.length - 1); i >= 0; i--) {
            var d = parseFloat(CardIn.value.charAt(i));
            j++;      // j is inverse to i
            if (j % 2 == 0) {
                d = d * 2;
                if (d > 9) {
                    var temp = d.toString().split("");
                    var realtemp = temp.map(Number);
                    d = (realtemp[0] + realtemp[1]);
                }
            }
            //console.log(j + " " + i + " " + d) 
            cSum.push(d);

        }
        cTotal = cSum.reduce(add, 0);
        cSum = [0];
        function add(accumulator, a) {
            return accumulator + a;
        }

        if (cTotal % 10 == 0) {
            cardValid = 1;
        } else {
            cardValid = 0;
        }
        cardCheck();
    } else {
        cardValid = 0;
        cardCheck();
    }
    console.log("Card: " + cardValue);


}

function nameCheck() {  //input styles now have their own function to simplify code.
    if (nameValid == 0) {
        document.getElementById('NameIn').style.backgroundColor = 'rgb(231,0,100)';
        document.getElementById('nameWarning').style.display = 'block';    //DN Pink is specified for errors but I find it harder to read against the green background than DN Grey.
        document.getElementById('nameBreak').style.display = 'none';
        console.log("name is invalid");

    } else {
        document.getElementById('NameIn').style.backgroundColor = 'rgb(137,200,46)';
        document.getElementById('nameWarning').style.display = 'none';
        document.getElementById('nameBreak').style.display = 'block';

        console.log("name is valid");
    }
    validationCheck();
}

function emailCheck() {
    if (emailValid == 0) {
        document.getElementById('EmailIn').style.backgroundColor = 'rgb(231,0,100)';
        document.getElementById('emailWarning').style.display = 'block';
        document.getElementById('emailBreak').style.display = 'none';
        console.log("email is invalid");

    } else {
        document.getElementById('EmailIn').style.backgroundColor = 'rgb(137,200,46)';
        document.getElementById('emailWarning').style.display = 'none';
        document.getElementById('emailBreak').style.display = 'block';
        console.log("email is valid");
    }
    validationCheck();
}


function cardCheck() {
    if (cardValid == 0) {
        document.getElementById('CardIn').style.backgroundColor = 'rgb(231,0,100)';
        document.getElementById('cardWarning').style.display = 'block';
        document.getElementById('cardBreak').style.display = 'none';
        console.log("card is invalid");

    } else {
        document.getElementById('CardIn').style.backgroundColor = 'rgb(137,200,46)';
        document.getElementById('cardWarning').style.display = 'none';
        document.getElementById('cardBreak').style.display = 'block';

        console.log("card is valid");
    }
    validationCheck();
}

function validationCheck() {
    if ((nameValid == 1) && (emailValid == 1) && (cardValid == 1)) {
        enableSub();
    } else {
        disableSub();
        console.log("Input errors found. Submission disabled");  //Will repeat after clicking out of any field until all inputs are valid, can cause an unsightly dev log.
    }
}






function disableSub() {
    document.getElementById('SubButton').disabled = true; //CHANGE BACK! - removed for testing purposes.
    document.getElementById('SubButton').style.cursor = 'no-drop'; //Not specified in user stories but useful to me as visual confirmation.
}

function enableSub() {
    document.getElementById('SubButton').disabled = false;
    document.getElementById('SubButton').style.cursor = 'pointer';
}

function submit() {
    submitValue = [nameValue, emailValue, cardValue];
    console.log("Name: " + submitValue[0] + ". " + "Email: " + submitValue[1] + ". " + "Card: " + submitValue[2] + ".");

}       //