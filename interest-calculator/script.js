// Compute the interest rate when the "comput interest" button is clicked
// Output the user enter data and final calculation
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
 
    // if the principle is invalid, then do not calculate the interest
    if (invalidValue())
        return;

    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML = 
    "If you deposit <mark>" + principal +
    "\</mark\>,\<br\> at an interest rate of <mark>"  + rate + 
    "%.\</mark\>\<br\>You will receive an amount of \<mark\>" + interest + 
    "\</mark\>,\<br\>in the year\<mark\> " + year + "</mark\>\<br\>"
}

// Update the interest rate selected by the user
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

// Validate the principal entry is greater than zero
function invalidValue()
{
    var p = document.getElementById("principal").value;

    if (!(p > 0))
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return 1;
    }
    return 0;
}



        