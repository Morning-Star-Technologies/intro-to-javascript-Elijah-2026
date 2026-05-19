/*
* Complete the following:
* 
* 1. Create a function that takes two parameters and logs them to the console
*    - show this function works by calling it
* 2. Create a function that takes in one parameter of type number and returns the doubled result
*    - show this function works by calling the function and logging the result
*/

// Begin writing your code below
//let subject = cobraKai
let winners= []; 
let goodDojoStrengh =  15 
let badDojoStrengh =   13

 console. log ('Get ready for the All Valley KarateTournament!')
 console.log ('                         ')
 console.log ('The first fight beings...')
 console.log ('                   ')
 console.log ('Miguel vs Robby')
console.log ('Robby advances and Miguel defends')

if (goodDojoStrengh > badDojoStrengh) { 
    console.log ('Miguel wins!');
    winners.push ('Miguel')
} else  { 
    console.log ('Robby wins!')
    winners.push ('Robby');
}
console.log ('The second fight begins...')
console.log ('Hawk vs Kenny')
console.log ('Hawk is uses kicks, and Kenny uses punches') 
if (goodDojoStrengh < badDojoStrengh) { 
    console.log ('Kenny wins');
    winners.push ('Kenny')
} else { 
    console.log ('Hawk wins!')
    winners.push ('Hawk')
}
console.log ('          ')
console.log ('All Valley Karate Tournament finishes')
console.log ('Tournament winners: ', winners)
console.log ('                                                         ')

winners = [ ]
let goodDojo = 'Hawk' 
let badDojo = 'Robby' 
goodDojoStrengh = 12
badDojoStengh = 15 
let goodDojoMainAttack = 'kicks' 
let badDojoMainAttack = 'punches' 
console.log ('Get ready for the All Valley Karate Tournament')
console.log ('                               ')
console.log ('The battle begins')
console.log (goodDojo,' vs ',badDojo);
console.log (goodDojo, 'uses', goodDojoMainAttack, 'and', badDojo, 'uses', badDojoMainAttack, '!'); 
if (goodDojoStrengh > badDojoStengh) { 
    console.log (goodDojo, 'wins');
    winners.push (goodDojo)
} else { console.log (badDojo, 'wins'); 
    winners.push (goodDojo)
}
console.log ('                  ')
goodojo = 'Miguel'  
badDojo = 'Kenny' 
goodDojoStrengh = 19 
badDojoStengh = 7 
goodDojoMainAttack = 'kick' 
badDojoMainAttack = 'punch' 
console.log ('The second battles begins')
console.log (goodDojo, 'vs', badDojo); 
console.log (goodDojo, 'uses', goodDojoMainAttack,' and', badDojo, ' uses', badDojoMainAttack, '!');
if (goodDojoStrengh > badDojoStengh) { 
    console.log (goodDojo, 'wins');
    winners.push (goodDojo)
} else { console.log (badDojo, 'wins'); 
    winners.push (goodDojo)
}

console.log ('          ')
console.log ('All Valley Karate Tournament is finished')
console.log ('Tournament Winners: ', winners)
console.log ('                       ')
function danielSpeaks ( ) {
    console.log ('Wax on, wax off'); 
} 
danielSpeaks (); 

function greet(name) { 
    console.log ('Hello '+ name + '!')
}
greet ('Johnny'); 
console.log ('      ')
function addnumbers(num1, num2){ 
    return num1 + num2;
}
let result = addnumbers (6,4); 
console.log ('Return value from the function', result) 
console.log ('                   ')
function karateBattle(goodDojo,badDojo, goodDojoStrengh, badDojoStengh, goodDojoMainAttack,badDojoMainAttack) { 
    let winners = undefined
    console.log ('                        ')
    console.log ('Next Karate Battle Begins!')
    console.log ('                       ')

    console.log (goodDojo ,'vs', badDojo, 'again'); 
    console.log (goodDojo ,'uses', goodDojoMainAttack ,'and', badDojo ,'uses', badDojoMainAttack, '!');

    if (goodDojoStrengh > badDojoStengh) { 
        console.log (goodDojo, 'wins!'); 
        winner = goodDojo; 
    } else { console.log (badDojo, 'loses');
        winner = badDojo; 
    } 

    console.log ('           ')
    console.log ('Karate battle is finished')
    console.log ('               ')

    return winner; 
}
console.log ('                     ')
console.log ('The final karate battle is about to begin')
console.log ('                     ')

let thisRoundsWinner1 = undefined
let thisRoundsWinner2 = undefined
let thisRoundsWinner3 = undefined 
let fightbattle = result 
winners = [thisRoundsWinner1, thisRoundsWinner2, thisRoundsWinner3];

thisRoundsWinner1 =  karateBattle ('Miguel', 'Hawk', 'punches', 'kicks', 23, 21);
winners.push = thisRoundsWinner1
thisRoundsWinner2 =  karateBattle ('Kreese', 'Silver', 'kicks', 'punches', 21, 20);
winners.push = thisRoundsWinner2
thisRoundsWinner3 =  karateBattle ('Danil', 'Johnny', 'kick', 'punch', 21, 21);
winners.push = thisRoundsWinner3

console.log ('The winners are ', winners);