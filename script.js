// Create an array for the possible lengths
var userLengthArray = [];
var startLeng = 8;

// Adding elements to the array
for(i = 0; i < 121; i++)
{
    userLengthArray.push(startLeng);
    console.log(startLeng);
    startLeng++
    
}


//Save that var userLength
var input = document.getElementById("lengthOfPassword").value.toUpperCase();
console.log(input);

  var item = userLengthArray.find((item) => item[input])

if(item)
{
    console.log(item);
}






//User case switch to branch off from there
// have code prompt user for 