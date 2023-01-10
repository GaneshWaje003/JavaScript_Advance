/* @ Note backtick is different from single inverted comma ('') as you can see this is single inverted comma */  


//  -------Template literarls Starts ------ 


// Normal ways of using variable in other variable or concatinating a variable in string
var user = "New User";
var greet = "Hello" + user;

// ----- Template literals in javascript using backtic
var user = "New User"
var greet = `Hello ${user}`

/*                      
                           # Imp Info # 
@ Note backtick is different from single inverted comma ('') as you can see this is single inverted comma   
@ With the help of this we can use variable without concantination.
@ Here for using template literals Content is written in backtick means following symbol = ``
@ backtick also act as string so use ( $ ) dollar sign with curly presses and write variable in it.
@ eg. console.log(`New user is is ${variable}`);
*/

var user = "New User";
var pass = 1234;
var id   = HT1;

// without using template literals 
console.log("Welcome "+user+"your pass :"+pass+" and id is:"+id);

// with using template literals
console.log(`Welcome ${user} , your pass :${pass} and id :${id}`);


//  -------Template literarls Ends ------

/* @ Note backtick is different from single inverted comma ('') as you can see this is single inverted comma */
