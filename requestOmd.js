var http = require("http")


http.get("http://omdbapi.com/?i=tt0241527", function(res){  //This is a get function that returns an object with a response
    res.setEncoding("utf8"); //This makes it a string
    res.on("data", function(data){  
        var arry1 = data.split(" ");  //a callback function that makes the data received into an array
    
    http.get("http://omdbapi.com/?i=tt0295297", function(res){ //this is inside the above function so that both are called on at the same time
    res.setEncoding("utf8");  //Makes the data a string
    res.on("data", function(data){
        console.log(arry1.concat(data.split(" "))); //console.log the 1st array, concate the 2nd to the first so 1 array and join them together
    });


//Order of Operations
    console.log("1st Array") // This is the second element called before the long array
    res.on("end", function(){
        console.log("Finished!") // This is the last element called
    })

    })
    res.on("end", function(){
        console.log("Beginning") //This is the first thing called
    })
})
});

// http.get("http://omdbapi.com/?i=tt0295297", function(res){
    // res.setEncoding("utf8");
    // res.on("data", function(data){
        // console.log(array1.concat(data.split(" ")));
    // });
// 
   