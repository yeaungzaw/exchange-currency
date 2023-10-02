// select
const input = document.getElementById("input");
const output = document.getElementById("output");
const fromCountry = document.getElementById("fromCountry");
const toCountry = document.getElementById("toCountry");
const calcBtn = document.getElementById("calcBtn");
const downAndUpBtn = document.getElementById("downAndUpBtn");
const from = document.getElementById("from");
const to = document.getElementById("to");

// function
const calc = (str1, str2) => {

    if (input.value !== '') {
        if ((str1 === 'usd') && (str2 === 'mmk')) {
            output.value = input.valueAsNumber * 3000;
        } else if ((str1 === 'usd' && (str2 === 'thb'))) {
            output.value = (input.valueAsNumber * 3000) / 100;
        } else if ((str1 === 'mmk') && (str2 === 'usd')) {
            output.value = input.valueAsNumber / 3000;
        } else if ((str1 === 'mmk') && (str2 === 'thb')) {
            output.value = input.valueAsNumber / 100;
        } else if ((str1 === 'thb') && (str2 === 'mmk')) {
            output.value = input.valueAsNumber * 100;
        } else if ((str1 === 'thb') && (str2 === 'usd')) {
            output.value = (input.valueAsNumber * 100) / 3000;
        }
    }

}

calcBtn.onclick = () => {
    calc(fromCountry.value, toCountry.value);
}

downAndUpBtn.onclick = () => {
    let f = from.innerHTML;
    let t = to.innerHTML;
    let i = input.value;
    let o = output.value;



    from.innerHTML = t;
    to.innerHTML = f;
    input.value = o;
    output.value = i;
}