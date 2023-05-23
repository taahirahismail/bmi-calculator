function calcBMI() {
    let num1, num2, total;
    num1 = parseFloat(document.getElementById("weight").value)
    num2 = parseFloat(document.getElementById("height").value)
    total = (num1 / num2**2)*10000;
    
    if (total <= 18.4) {
        document.getElementById("bmi").value = total.toFixed(2) + " Underweight"
        document.getElementById("bmi").style.backgroundColor = "#FFFF26"
        document.getElementById("calc").style.backgroundColor = "#FFFF26"
    } else if (total > 18.4 && total <= 24.9) {
        document.getElementById("bmi").value = total.toFixed(2) + " Normal"
        document.getElementById("bmi").style.backgroundColor = "#8EFF26"
        document.getElementById("calc").style.backgroundColor = "#8EFF26"
    } else if (total > 24.9 && total <= 39.9) {
        document.getElementById("bmi").value = total.toFixed(2) + " Overweight"
        document.getElementById("bmi").style.backgroundColor = "#FFD726"
        document.getElementById("calc").style.backgroundColor = "#FFD726"
    } else if (total > 39.9) {
        document.getElementById("bmi").value = total.toFixed(2) + " Obese"
        document.getElementById("bmi").style.backgroundColor = "#FF2626"
        document.getElementById("calc").style.backgroundColor = "#FF2626"
    } else {
        ""
    }
}

function refresh() {
    window.location.reload();
}