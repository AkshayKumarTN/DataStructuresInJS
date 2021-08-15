let myArray = new Array(0, -1, 2, -3, 1);
findTriplets(myArray, myArray.length);


function findTriplets(myArray, n)
{
    let found = false;
    for (let i=0; i<n-2; i++)
    {
        for (let j=i+1; j<n-1; j++)
        {
            for (let k=j+1; k<n; k++)
            {
                if ((myArray[i]+myArray[j]+myArray[k])== 0)
                {
                    console.log(myArray[i]+","+myArray[j]+","+myArray[k]);
                    found = true;
                }
            }
        }
    }
    // If no triplet with 0 sum found in array.............
    if (found == false)
        System.out.println(" not exist ");

}
