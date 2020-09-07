
function remainder(divisor, dividend, k) {
    for (let i = 0; i < divisor.length - 1; i++) {
        dividend += "0";
    }
    var rem = "";
    while (true) {

        let temp = "";
        for (let k = 0; k < divisor.length; k++) {
            let ch1 = divisor.charAt(k) - '0';
            let ch2 = dividend.charAt(k) - '0';
            let res = ch1 ^ ch2;
            temp += res + "";
        }
        let st = temp.length;

        for (let j = 0; j < temp.length; j++) {
            if (temp.charAt(j) == '1') {
                st = j;
                break;
            }
        }

        temp = temp.substring(st);
        dividend = temp + dividend.substring(divisor.length);
        console.log(dividend)
        if (dividend.length < divisor.length) {
            rem = dividend;
            break;
        }
    }
    while (rem.length != divisor.length - 1) {
        rem = "0" + rem;
    }
    return rem;
}

document.getElementById("calc").addEventListener("click", () => {
    var dividend = document.getElementById("msg").value;
    var divisor = document.getElementById("key").value;
    if (dividend.length == 0 || divisor.length == 0) {
        window.alert("please enter valid input");
        return;
    }
    console.log(dividend, divisor);
    var rem = remainder(divisor, dividend);
    document.getElementById("rem").innerHTML = rem;
    document.getElementById("final").innerHTML = dividend + rem;
    
    document.getElementById("show").style.display = "block";
})
