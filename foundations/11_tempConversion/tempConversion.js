//(0°F − 32) × 5/9 = -17.78°C
//(°F − 32) × 5/9 = °C
const convertToCelsius = function convertToCelcius(F) {
  return(Math.round(((F - 32) * 5 / 9) * 10) / 10);
};

//(0°C × 9/5) + 32 = 32°F
//(°C × 9/5) + 32 = °F
const convertToFahrenheit = function convertToFarenheit(C) {
  return(Math.round(((C * 9 / 5) + 32) * 10) /10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
