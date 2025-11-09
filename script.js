const input = document.getElementById("tempInput");
const unit = document.getElementById("unit");
const result = document.getElementById("result");
const btn = document.getElementById("convertBtn");

btn.addEventListener("click" ,function() {
    let temp = parseFloat(input.value);

    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number!";
        return;
    }

    if (unit.value === "C") {
        let fahrenheit = (temp * 9/5) + 32;
        result.textContent = `${temp}°C = $fahrenheit.toFixed(2)}°F`;
    } else {
        let celcius = (temp - 32) * 5/9;
        result.textContent = `${temp}°F = ${celcius.toFixed()}°C`;
    
    }
});
