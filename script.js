alert("Loading weather report...")

// I used Stack Overflow and https://ricardometring.com/getting-the-value-of-a-select-in-javascript for guidance on how to grab <select> options in JS. I copied the code for var select and var value from ricardometring.com and used my own id name. I made sure to understand how the code worked instead of just copy and pasting.

var fTemps = ["75°", "65°", "80°", "66°", "69°", "61°", "78°", "70°"];
var cTemps = ["24°", "18°", "27°", "19°", "21°", "16°", "26°", "21°"];

function changeTemp() {
    var select = document.getElementById("degtype");
    var value = select.options[select.selectedIndex].value;

    if (value == "fahrenheit") {
        document.getElementById("todayhigh").innerText = fTemps[0];
        document.getElementById("todaylow").innerText = fTemps[1];
        document.getElementById("tomhigh").innerText = fTemps[2];
        document.getElementById("tomlow").innerText = fTemps[3];
        document.getElementById("frihigh").innerText = fTemps[4];
        document.getElementById("frilow").innerText = fTemps[5];
        document.getElementById("sathigh").innerText = fTemps[6];
        document.getElementById("satlow").innerText = fTemps[7];
    }

    else if (value == "celsius") {
        document.getElementById("todayhigh").innerText = cTemps[0];
        document.getElementById("todaylow").innerText = cTemps[1];
        document.getElementById("tomhigh").innerText = cTemps[2];
        document.getElementById("tomlow").innerText = cTemps[3];
        document.getElementById("frihigh").innerText = cTemps[4];
        document.getElementById("frilow").innerText = cTemps[5];
        document.getElementById("sathigh").innerText = cTemps[6];
        document.getElementById("satlow").innerText = cTemps[7];
    }
}

