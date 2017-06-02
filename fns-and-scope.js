//////////////////PROBLEM 1////////////////////

var name = 'Tyler';

//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
	if(name === "Tyler"){
		return true;
	}
	return false;
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(){
	var cake = prompt();
	return cake;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(name) {
	return alert("Welcome, " + getName());
}


//////////////////PROBLEM 4////////////////////



//What is the difference between arguments and parameters?

	//Parameters are containers for functions while arguements are what goes in those containers.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //false, NaN, "", null, undefined, 0. You can tell if it's falsy by running a check to see if the value is == to false



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName(){
  	return "Elizabeth";
  }
  


//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {
  	return function() {
  		return myName();
  	};
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
innerFn();
