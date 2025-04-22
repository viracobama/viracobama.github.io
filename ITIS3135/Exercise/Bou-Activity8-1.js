//Global variables
let prevCalc = 0;
let calc = "";

let $ = function (select) { return document.querySelector(select); };

document.addEventListener("DOMContentLoaded", function () {
    // Number 1 button
    $("input[name='btn1']").addEventListener("click", () => showNum(1));
    // Number 2 button
    $("input[name='btn2']").addEventListener("click", () => showNum(2));
    // Number 3 button
    $("input[name='btn3']").addEventListener("click", () => showNum(3));
    // Number 4 button
    $("input[name='btn4']").addEventListener("click", () => showNum(4));
    // Number 5 button
    $("input[name='btn5']").addEventListener("click", () => showNum(5));
    // Number 6 button
    $("input[name='btn6']").addEventListener("click", () => showNum(6));
    // Number 7 button
    $("input[name='btn7']").addEventListener("click", () => showNum(7));
    // Number 8 button
    $("input[name='btn8']").addEventListener("click", () => showNum(8));
    // Number 9 button
    $("input[name='btn9']").addEventListener("click", () => showNum(9));
    // Number 0 button
    $("input[name='btn0']").addEventListener("click", () => showNum(0)); 
    // Add button
    $("input[name='btnPlus']").addEventListener("click", add);
    // Subtract button
    $("input[name='btnMinus']").addEventListener("click", subtract);
    // Multiply button
    $("input[name='btnTimes']").addEventListener("click", multiply);
    // Divide button
    $("input[name='btnDivide']").addEventListener("click", divide);
    // Power button
    $("input[name='btnPow']").addEventListener("click", power);
    // Power to the 2 button
    $("input[name='btnPow2']").addEventListener("click", power2);
    // Decrement button
    $("input[name='btnDecrement']").addEventListener("click", decrement);
    // Square Root button
    $("input[name='btnSqrt']").addEventListener("click", sqrt);
    // Decimal button
    $("input[name='btnDecimal']").addEventListener("click", () => showNum('.')); 
    // Clear the screen button
    $("input[name='btnReset']").addEventListener("click", clear);
    // Calculate button
    $("input[name='btnCalc']").addEventListener("click", calculate);
});

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    let prev = parseFloat(document.frmCalc.txtNumber.value);
    document.frmCalc.txtNumber.value += value;
    if (isNaN(document.frmCalc.txtNumber.value)) {
        document.frmCalc.txtNumber.value = prev;
    }
}


//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

//The following function is called when "Subtract" button is clicked. 
//Note that it also changes the values of the global variables.  
function subtract() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Subtract";
        }
}

//The following function is called when "Multiply" button is clicked. 
//Note that it also changes the values of the global variables.  
function multiply() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Multiply";
        }
}

//The following function is called when "Divide" button is clicked. 
//Note that it also changes the values of the global variables.  
function divide() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Divide";
        }
}

//The following function is called when "Power" button is clicked. 
//Note that it also changes the values of the global variables.  
function power() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Power";
        }
}

//The following function is called when "Power" button is clicked. 
//Note that it also changes the values of the global variables.  
function power2() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            let total = Math.pow(num, 2);
            document.frmCalc.txtNumber.value = total;
        }
}

//The following function is called when "Square Root" button is clicked. 
//Note that it also changes the values of the global variables.  
function sqrt() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            let total = Math.sqrt(num);
            document.frmCalc.txtNumber.value = total;
        }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add"){
                let total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc == "Subtract"){
                let total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc == "Multiply"){
                let total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc == "Divide"){
                let total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc == "Power"){
                let total = Math.pow(prevCalc, num);
                document.frmCalc.txtNumber.value = total;
            }
}}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}