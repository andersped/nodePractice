var fs = require('fs') //<- this is requiring the file system

//Reading Files- takes a single argument
// var contents = fs.readFileSync("test.txt");// <- this is allowing to read the file
// console.log(contents.toString().split("\n").length-2);// <- console.logging the text into the terminal

//The above has no callback function and needs a toString so theres no buffer objects


//Reading Files Asynchronously- takes multiple arguments and a callback function 
fs.readFile("test.txt", "utf8", function(err, data){ //"utf8 makes the contents into a string from buffer objects"
	if(err) throw err //if there is an error it shows it
	console.log(data.split("\n").length-2);
})