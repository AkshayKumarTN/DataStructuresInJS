let myArray = new Array();
for(i=0;i<100;i++)
{
    let result=RepeatedDigit(i);
    if(result==0)
    {
        myArray.push(i);
    }
}
console.log("Repeated Digits in the range 0-100  : "+myArray.join(','));


function RepeatedDigit(number)
{
    let arr =[];
    let result =0;
    while(number != 0)
    {
        result = number%10;          
        // if the digit is present more than once in the number.............
        if (arr.indexOf(result)!=-1)
        {
            // return 0 if the number has repeated digit.....................
            return 0;
        }
        arr.push(result);
        number = Math.floor(number/10);
    }      
    // return 1 if the number has no repeated digit..................
    return 1;
}