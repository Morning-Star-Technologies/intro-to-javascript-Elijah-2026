/**
* Using a common theme (pick whatever you like) demonstrate the use of a while loop and include the following:
* - An if (or if/else) statement inside the while loop
* - At least one comparison operator somewhere in your code
*/

// Begin writing your code below

let starWarsBountyHunter = ['cadBane', 'Jango', 'bobaFett', 'Hondo', 'dinDjarin']; 

let k = 0 
while (k < starWarsBountyHunter.length) {
    if (starWarsBountyHunter[k].includes('o')) { 
        console.log(starWarsBountyHunter[k]);
    }
    k++; 
}