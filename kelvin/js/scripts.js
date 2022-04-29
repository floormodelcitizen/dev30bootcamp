// Declare Kelvin
const kelvin = 293

// Calculate Celsius
const celsius = kelvin - 293

// Calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32

// Round down calculated Fahrenheit
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert Celsius to Newton
const newton = celsius * (33/100)

console.log(`The temperature is ${newton}\xB0 Newton.`);