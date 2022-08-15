const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const mail = 'sheikhsuzan71@gmail.com';
const pass = 223344;

// window.onload function
window.onload = function () {
    update();
}


// LOgin function
function sub() {
    if((email.value == mail) && (password.value == pass)) {
        return true;
    } else {
        alert('Couldn\'t recognize yourself. Input valid email and password !!!');
        return false;
    }
}


// update function
function update() {
    const depositBtn = document.getElementById('depositbtn');
    const withdrawBtn = document.getElementById('withdrawbtn');
    const balance = document.getElementById('balance');
    const deposit = document.getElementById('depoupdate');
    const withdraw = document.getElementById('withupdate');
    const withamount = document.getElementById('withamount');
    const dipoamount = document.getElementById('dipoamount');
    let balances = 1200;
    let withamo = 0;
    let depositamount = 0;

    depositBtn.addEventListener('click', function () {
        if(Number(dipoamount.value) >= 0) {
            balances = balances + Number(dipoamount.value);
            balance.innerText = `$${balances}`;
            depositamount = depositamount + Number(dipoamount.value);
            deposit.innerText =`$${depositamount}`;
        } else {
            alert('Negative or invalid number denied !!!')
        }
    })

    withdrawBtn.addEventListener('click', function () {
        if(Number(withamount.value) >= 0){
            if((balances - Number(withamount.value)) >= 0) {
                balances = balances - Number(withamount.value);
                balance.innerText = `$${balances}`;
                withamo = withamo + Number(withamount.value);
                withdraw.innerText =`$${withamo}`;
            } else {
                alert('You have not enough balance to withdraw');
            }
        } else {
            alert('Negative value has no existence. Input a valid positive amount. !!!')
        }
    })

}