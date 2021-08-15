let myArray = new Array();
for(i=0;i<10;i++)
{
    var randomVal=Math.floor(Math.random()*(999-100+1)+100);
    myArray.push(randomVal);
    console.log("Random value "+i+" : " +randomVal);
}
let sortedMyArray=myArray.slice(0).sort();
console.log("Sorted Array :");
for(i=0;i<10;i++)
{
    console.log(i+" : " +sortedMyArray[i]);
}

console.log("The 2nd Smallest Number in the Array : "+sortedMyArray[1]);
console.log("The 2nd Largest Number in the Array : "+sortedMyArray[8]);