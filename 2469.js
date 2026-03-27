const getKelvin = temp => temp + 273.15;
const getFahrenheit = temp => temp*1.8 + 32;

/**
 * @param {number} celsius
 * @return {number[]}
 */
const convertTemperature = celsius => [
    getKelvin(celsius),
    getFahrenheit(celsius)
];