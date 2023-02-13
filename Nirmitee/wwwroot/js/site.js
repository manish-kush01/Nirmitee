// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function calculateInterest() {
    var name = document.getElementById("name").value;
    document.getElementById("ename").innerHTML = name;

    var hra = parseFloat(document.getElementById("hra").value);
    var basicsalary = parseFloat(document.getElementById("salary").value);
    var cvallow = parseFloat(document.getElementById("cvallow").value);
    var mdallow = parseFloat(document.getElementById("mdallow").value);
    var days = parseFloat(document.getElementById("days").value);
    var salary = (basicsalary + cvallow + mdallow) * days / 30;
    document.getElementById("esalary").innerHTML = salary;

    var taxableincome = salary - (basicsalary * hra / 100) - cvallow - mdallow;
    document.getElementById("etincome").innerHTML = taxableincome;

    var x = 0;
    if (taxableincome * 12 <= 250000) { x = 0; }
    if (taxableincome * 12 <= 500000 && taxableincome * 12 >250000) { x = 0.05; }
    if (taxableincome * 12 <= 1000000 && taxableincome * 12 >500000) { x = 0.2; }
    if (taxableincome * 12 > 1000000) { x = 0.3; }

    document.getElementById("etamount").innerHTML = taxableincome*x;

}
