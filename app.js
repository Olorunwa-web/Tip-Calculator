'use strict'






let tipPercentage = 0;
let buttonss = document.querySelectorAll('.percent button');
let customTipInput = document.getElementById('custTip')

function setTip(percent) {
    tipPercentage = percent;
    buttonss.forEach(btn => btn.classList.remove('active'));
    buttonss[[5, 10, 15, 25, 50].indexOf(percent)].classList.add('active')
    document.getElementById('custTip').value = '';
    calculateTip();
}

// function customTip() {
//     let customTipChange  = document.getElementById('custTip').value
//     if (customTipChange) {
//         tipPercentage = parseFloat(customTipChange);
//         buttonss.forEach(btn => btn.classList.remove('active'));
//         calculateTip()
//     }
// }

customTipInput.addEventListener('input', function () {
    tipPercentage = parseFloat(this.value) || 0;
    buttonss.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active')
    calculateTip()
})

function calculateTip() {
    let input1 = parseFloat(document.getElementById('billInput').value);
    let input2 = parseInt(document.getElementById('peopleInput').value);
    let tip = document.getElementById('tip-price');
    let tips = document.getElementById('total-price');
    let Reset = document.querySelector('.reset-btn')

    if ( input1 > 0  &&  input2 > 0  && tipPercentage >= 0) {
        let tipAmount = ( input1 * (tipPercentage / 100)) / input2;
        let totalAmount = ( input1 / input2) + tipAmount;

        tip.textContent = tipAmount.toFixed(2);
        tips.textContent = totalAmount.toFixed(2);
        Reset.disabled = false;
    }
  
}



function validationPeople() {
    let invalid = document.getElementById('hidden');
    let inputNum = document.getElementById('peopleInput');
    let input2 = parseInt(document.getElementById('peopleInput').value);


    if (input2 <= 0  || isNaN(input2) ) {
        inputNum.style.borderColor = 'hsl(0, 100%, 74%)'
        invalid.style.display = 'block'
    } else {
        invalid.style.display = 'none'
        inputNum.style.borderColor = 'white'
        calculateTip()
    }
}


function resetAll() {
    document.getElementById('billInput').value = '';
    document.getElementById('peopleInput').value = '';
    document.getElementById('custTip').value = '';
    document.getElementById('tip-price').innerText = '0.00';
    document.getElementById('total-price').innerText = '0.00';
    document.querySelector('.reset-btn').disabled = true;
    document.getElementById('reset').style.opacity = '0.2'
    document.getElementById('peopleInput').style.borderColor = 'white';
    document.getElementById('hidden').style.display = 'none';
    buttonss.forEach(btn => btn.classList.remove('active'));
    tipPercentage = 0;

}

