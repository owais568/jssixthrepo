var firstName = prompt("Enter your first name.");
var lastName = prompt("Enter your last name.");
var fullName = firstName + lastName
console.log(fullName)

var mobile = prompt("Enter your mobile model.");
document.write(`My favorite phone is:`+ mobile +`</br>Length of string:`+ mobile.length)

var text = `Pakistani`
var indexNum = text.indexOf(`n`)
console.log(indexNum)
document.write(`String:`+text+`</br>Index of "n":`+indexNum)

var text = `Hellow World`
var indexNum = text.lastIndexOf(`l`)
console.log(indexNum)
document.write(`String:`+text+`</br>Index of "n":`+indexNum)

var text = `Pakistani`
var indexNum = text.indexOf(`i`)
console.log(indexNum)
document.write(`String:`+text+`</br>Character at index `+indexNum+`: i`)

var city = `Hyderabad`
 city.slice(5,9)
var replace = city.replaceAll("Hyder","Islam")
document.write(`City: `+ city+`</br>After replacement: `+replace)

var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace = message.replaceAll("and",`&`)
document.write(replace)

var num = "472"
var replace = num.replaceAll("472",472)
document.write(`Value:`+num+`</br>Type:string</br>Value:`+replace+`</br>Type:number`)

var word = prompt("Enter any word.");
document.write(`User input:`+ word+`</br>Upper case:`+ word.toUpperCase())

var word = "javascript"
var newWord = word.slice(0,1).toUpperCase()
document.write(word + newWord+word.slice(1,10))
