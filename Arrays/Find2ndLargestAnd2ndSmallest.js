let myArray = new Array();
for(i=0;i<10;i++)
{
    var randomVal=Math.floor(Math.random()*(999-100+1)+100);
    myArray.push(randomVal);
    console.log("Random value "+i+" : " +randomVal);
}
var secondMaxNumber = SecoundMax(myArray);
var secondMinNumber = SecoundMin(myArray);

console.log("The 2nd Largest Number in the Array : "+secondMaxNumber);
console.log("The 2nd Smallest Number in the Array : "+secondMinNumber);

function SecoundMax(arr)
{ 
    var max = Math.max.apply(null, arr); // Get the min of the array..........
    arr.splice(arr.indexOf(max), 1); // Gemove max from the array..........
    return Math.max.apply(null, arr); // get the 2nd max..........
}

function SecoundMin(arr)
{ 
    var min = Math.min.apply(null, arr); // Get the min of the array..........
    arr.splice(arr.indexOf(min), 1); // Gemove min from the array..........
    return Math.min.apply(null, arr); // get the 2nd min..........
}