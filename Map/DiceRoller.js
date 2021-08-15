let diceRolled = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
let flag=true;
let maxValueKey=0;
// Repeating till any one of the number has reached 10 times.............
while(flag)
{
    let randomNumber=Roll();
    let value=diceRolled.get(randomNumber);
    // Stored the result in a dictionary........
    diceRolled.set(randomNumber,value+1);
    if(value+1==10)
    {
        flag=false;
        maxValueKey=randomNumber;
    }
}
let minValue=10;
let minValueKey=0;
for(let i=1;i<7;i++)
{
    if(diceRolled.get(i)<minValue)
    {
        minValue=diceRolled.get(i);
        minValueKey=i;
    }
}
console.log(diceRolled);
console.log("Minimum Times Reached Number : "+minValueKey);
console.log("Maximum Times Reached Number : "+maxValueKey);



function Roll() 
{
    // Roll a die and find the number between 1 to 6.............
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}