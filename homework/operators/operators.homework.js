/*
* Using a common theme (pick whatever you like) demonstrate two of the
* following categories of operators:
*
* - Arithmetic Operators (+, -, *, /)
* - Comparison Operators (===, !==, >, <, >=, <=)
* - Logical Operators (&&, ||, !)
* - String Operator (+)
*
* You will need to create variables to hold values and then log some
* sort of output to the console that demonstrates the use of these operators.
*
* Example:
*    let peasantHealth = 50;
*    const wolfDamage = 20;
*    peasantHealth = peasantHealth - wolfDamage;
*    console.log('The peasant has', peasantHealth, 'health left after the wolf attack.');
*/

// Begin writing your code below

let bankaccount = 120 
const salary = 30 
let amountofmoneyyouhave1 = bankaccount + salary; 
console.log('The, amountofmoneyyouhave', amountofmoneyyouhave1, 'money after events.')

const tax = 10 
let amountofmoneyyouhave2 = bankaccount + salary - tax 
console.log('The, amountofmoneyyouhave', amountofmoneyyouhave2, 'money after events.')

const robbery = 15 
let amountofmoneyyouhave3 = bankaccount + salary - tax - robbery 
console.log('The, amountofmoneyyouhave', amountofmoneyyouhave3,  'money after events')

const raise = 15 
let amountofmoneyyouhave4 = bankaccount + salary - tax - robbery + raise 
console.log('The, amountofmoneyyouhave', amountofmoneyyouhave4,  'money after events')

const fee = 15 
let amountofmoneyyouhave5 = bankaccount + salary - tax - robbery + raise - fee 
console.log('The, amountofmoneyyouhave', amountofmoneyyouhave5,  'money after events')

const oldsavings = 5 
const newsavings = 20
let amountofmoneyyouhave6 = bankaccount + salary - tax - robbery + raise - fee + oldsavings + newsavings
console.log('The, amountofmoneyyouhave', amountofmoneyyouhave6,  'money after events')

const addedfee = 5
const secondrobbery = 10 
const lottery = 100
let amountofmoneyyouhave7 = bankaccount + salary - tax - robbery + raise - fee + oldsavings + newsavings - addedfee - secondrobbery + lottery 
console.log('The, amountofmoneyyouhave', amountofmoneyyouhave7,  'money after events')

let ten = 10 > 0 
console.log ('Ten is', 10 > 0, 'What does ten equal?') 

let eight = 4+4  
console.log ('eight is', 4+4 ,! 'what does eight equal') 

const onedozen = 12 
const halfadozen = 6 
console.log ('eighteen is', onedozen && halfadozen, 'true')    
console.log ('eighteen is', onedozen && halfadozen,! 'is it eighteen?')

let True = true 
console.log ('true is', True, !'This is true.')

let one = false 
let two = false 
console.log ('is it true?', one && two, 'is it true?')
console.log ('is it true?', one && two,!'is it true?' )

let three = true 
let four = false 
let five = 2 + 3 
console.log ('2+3 is five', three || four, 'is it true?')