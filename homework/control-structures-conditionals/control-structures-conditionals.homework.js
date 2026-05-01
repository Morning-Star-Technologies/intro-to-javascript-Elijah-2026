/**
* Using a common theme (pick whatever you like) create the following:
* 
* 1. An if statement that evaluates to true and logs a message to the console.
* 2. An if/else statement that evaluates to false and logs a message to the console.
*/

// Begin writing your code below

let Gandalfstaff = true;

if (Gandalfstaff === true) {
    console.log ('Gandalf defeats enemies.'); 
} 

if (Gandalfstaff === false) { 
    console.log ('Gandalf does not defeat enemies.'); 
}

let Sauronhasring = false;

if (Sauronhasring === false) { 
    console.log ('Sauron loses.');
}

Sauronhasring = true  

if (Sauronhasring === true) { 
    console.log ('Sauron wins.');  
}

let home = 'twotowers'
let weapon = 'staff' 

if (home === 'twotowers' && weapon === 'staff') { 
    console.log ('The Wizard is Saruman');
}  else if (home === 'unknown' && weapon === 'swordandstaff') { 
    console.log  ('The Wizard is Gandalf');
}

home = 'Woodland Realm' 
weapon = 'bow and arrow'

if (home === 'Rivendell' && weapon === 'sword') { 
    console.log ('The elf is Elrond'); 
} else if (home === 'Woodland Realm' && weapon === 'bow and arrow') { 
    console.log ('The elf is Legolas');
} else if (home === 'Valinor' && weapon ===  'none') { 
    console.log ('The elf is Galadriel');
}

let Frodohasring = false 
    
if ('Frodohasring === false') { 
        console.log ('Frodo does not turn evil');
    }  else if ('Frodohasring === true') {  
        console.log ('Frodo turns evil');
    }
   
    let Aragornhasasword = false 
    if ('Aragonhasasword === false') { 
        console.log('Aragorn has a sword');
    }

    /*Switch (Character), { 
        *case 'Sam' 
       *console.log ('Sam is a Hobbit.'); 
       * Break; 
       * case 'Frodo': 
       * console.log ('Frodo is a Hobbit.'); 
       * case 'Merry': 
       * console.log ('Merry is a Hobbit.'); 
       * case 'Pippin': 
       * console.log ('Pippin is a Hobbit');
    *///}

let numberoffellowship = 9;  
if (numberoffellowship) { 
    console.log ('There are ' + numberoffellowship + ' fellowship!');
} else { 
    console.log ('There is no fellowship'); 
}

numberoffellowship = 10*  'fellowship'; 
if (numberoffellowship) { 
    console.log ('There are ' + numberoffellowship + 'fellowship!'); 
} else { 
    console.log ('There is no fellowship');
}

let fellowshipmember = 'Gimli'
if (fellowshipmember) { 
    console.log ('The fellowshipmember is '  + fellowshipmember + '!'); 
} else { 
    console.log ('There is no fellowshipmember');
}

fellowshipmember = '';
if (fellowshipmember) { 
    console.log ('The fellowshipmember is ' + fellowshipmember + '!'); 
} else { 
    console.log ('The is no fellowshipmember');
}

let Ring = 1  
if (Ring) { 
    console.log ('The Ring is ' + Ring + '');
} else { 
    console.log ('There is no Ring');
}

let numberofbooks = 3 
if (numberofbooks) { 
    console.log ('The numberofbooks is ' + numberofbooks + ''); 
} else { 
    console.log ('There are no books');  
}

let orcarmy =  0 
console.log ('There are ' + orcarmy + ' orcs!'); 

orcarmy = 0* 'orc';
console.log ('There are ' + orcarmy + ' orcs!')


let elvenarmy = 1000* 'Elven'; 
console.log ('There are ' + elvenarmy + ' Elves')


let dwarfarmy = 910  
orcarmy = 9 
elvenarmy = 10 
if (dwarfarmy) {
console.log ('dwarfarmy = ' + orcarmy + elvenarmy, 'soldiers')
} else { 
console.log ('There is no dwarfarmy')
}

let Gollumisevil = null 
Gollumisevil = true 
if (Gollumisevil === false) { 
console.log ('Gollum is not evil');
} else if (Gollumisevil = null) { 
console.log ('Gollum is neutral');
} else if (Gollumisevil = true) { 
console.log ('Gollum is evil')
} else if (Gollumisevil = undefined) { 
console.log ('Gollum is neither good or evil')
}
if (Gollumisevil = true) {
console.log ('Gollum is evil is ', true || false, '.' );
} else if (Gollumisevil = false) { 
console.log ('Gollum is evil is ', true || false, '.' ); } 

console.log ('Gollum is evil is', true || false, !  '.'); 