const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

if (temperature >= 80) {
console.log("Watering on ", temperature);
}
else {
    console.log("Watering off", temperature);
}

if (timeOfDay == "evening") {
console.log("Lights on");
}
else {
    console.log("Lights off");
}

while (soilMoisture < 40) {
  soilMoisture = soilMoisture + 5;
  console.log("Soil moisture is now:", soilMoisture);
}
