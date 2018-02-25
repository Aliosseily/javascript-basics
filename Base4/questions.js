
var stringSize = function (text) {
let result = text.length
return result
}
var replaceCharacterE = function (text) {
let result = text.replace(/e/ , " " );
return result
}
var concatString = function (text1, text2) {
let result = text1.concat(text2)
return result
}
var showChar5 = function (text) {
let result = text.charAt(4)
return result
}
var showChar9 = function (text) {
let result = text.substring(0, 9)
return result
}
var toCapitals = function (text) {
let result = text.toUpperCase();
return result
}
var toLowerCase = function (text) {
    let result = text.toLowerCase();
    return result
}
var removeSpaces = function (text) {
    let result = text
    return (result.trim())
}
var IsString = function (text) {
let result = text
return typeof result === 'string' 
}

var getExtension = function (text) {
return text.split('.').pop();
}
var countSpaces = function (text) {
    return (text.split(" ").length - 1)
}
var InverseString = function (text) {
   return text.split("").reverse().join("");
}

var power = function (x, y) {
   return Math.pow(x,y)
}
var absoluteValue = function (num) {
   return Math.abs(-5);
}
var absoluteValueArray = function (array) {

   return array.map(Math.abs)
}
var circleSurface = function (radius) {
 var x = Math.round(5 * radius * Math.PI)
    return x
}
var hypothenuse = function (ab, ac) {
    return (Math.hypot(ab , ac));
}
var BMI = function (weight, height) {
var x = Math.round(weight / (height * height) * 100) / 100 
    
return x
}

var createLanguagesArray = function () {
var languages = ["Html", "CSS", "Java", "PHP"]
return languages
}

var createNumbersArray = function () {
    var numbers =[0,1,2,3,4,5]
    return numbers 
}

var replaceElement = function (languages) {
   
    languages[2] = "Javascript"
    return languages
}

var addElement = function (languages) {
   
    languages[2] = "Javascript"
    languages.push("Ruby" , "Python") 
    
    return languages
}

var addNumberElement = function (numbers) {
   
    numbers.unshift(-2 ,-1)
    return numbers
}

var removeFirst = function (languages) {
    languages.shift()
return languages
}

var removeLast = function (languages) {
     languages.pop()
     return languages
}

var convertStrToArr = function (social_arr) {
    var array =social_arr.split(',')
    return array
}

var convertArrToStr = function (languages) {
    var array = languages.toString();
    return array
}

var sortArr = function (social_arr) {
var sort = social_arr.sort()
return sort
}

var invertArr = function (social_arr){
    var invert = social_arr.reverse()
    return invert
}
