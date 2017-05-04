console.log("array-methods")

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/



var el = document.getElementById("planets");

planets.forEach(function(planet){
	el.innerHTML += planet + "<br>";
})

// Use the map method to create a new array where the first letter of each planet is capitalized
planets.map(function(planet){
	var caps = planet.charAt(0).toUpperCase() + planet.slice(1)
	console.log(caps)
})
// Use the filter method to create a new array that contains planets with the letter 'e'
var gotE = planets.filter(function(planet){
	return planet.includes("e")
})
console.log(gotE)
// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(prev, curr){
	return (`${prev} ${curr}`)
})
console.log(sentence)