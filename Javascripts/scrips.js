
function updateGST() {
    var countrySelect = document.getElementById("countrySelect");
    var gstdisplay = document.getElementById("gstvalue");
    var selectedCountry = countrySelect.value;
    
    if (selectedCountry === "India") {
        gstdisplay.value = "18";

    } else if (selectedCountry === "Australia") {
        gstdisplay.value = "10";
    } else if(selectedCountry ==="USA") {
        gstdisplay.value = "8.48"; // Clear the input if none selected
    }
    else if(selectedCountry === "Japan"){
        gstdisplay.value = "10"
    }
    else{
        gstdisplay.value = " "
    }

}

function addgst() {
    var gstdisplay = parseFloat(document.getElementById("gstvalue").value);
    var userValue = parseFloat(document.getElementById("userValue").value);
    // var resultElement = document.getElementById("amt");

    var GSTAmount = (userValue*gstdisplay) / 100;
    var GrossAmount = GSTAmount + userValue;
    document.getElementById("nwtamt").innerHTML = userValue;
    document.getElementById("gstrate").innerHTML = gstdisplay+"%";
    document.getElementById("gstamt").innerHTML = GSTAmount;
    document.getElementById("amt").innerHTML = GrossAmount;
    // console.log(gstdisplay)
    // console.log(userValue)
    // console.log(resultElement)

}

function removegst(){
    var gstdisplay = parseFloat(document.getElementById("gstvalue").value);
    var userValue = parseFloat(document.getElementById("userValue").value);
    // var resultElement = document.getElementById("amt");

    var GSTAmount = (userValue*gstdisplay) / 100;
    var GrossAmount = userValue - GSTAmount;
    document.getElementById("nwtamt").innerHTML = userValue;
    document.getElementById("gstrate").innerHTML = gstdisplay+"%";
    document.getElementById("gstamt").innerHTML = GSTAmount;
    document.getElementById("amt").innerHTML = GrossAmount;

}