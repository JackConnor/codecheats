


A Basic click event listener, which changes the text to "Hi there"
note: "div3" is just any element with text on the inside

div3.addEventListener('click', function() {
div3.firstChild.nodeValue = "Hi there"
})

//version with "this"
div3.addEventListener('click', function() {
this.firstChild.nodeValue = "Hi there"
})


Event listener with working syntax

function test() {
  x = document.querySelector('#container');
  y = document.querySelector('')

  x.addEventListener('click', function(){
      x.innerHTML = "hi there";
  });
}
test();




 -------Reverse a string (arg = str) ---

function reverseString(str) {
      var array = [""];
      for (var i = str.length-1; i >= 0; i--) {
          array.push(str.charAt(i));
          }
          console.log(array.join(""));
          }



  /*---take the str (sentence) parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. ----*/

function capitalWords(str) {
  var array = str.split(" ");
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var letterArray = array[i][0];
    var capital = letterArray.toUpperCase();
    var newString = array[i].replace(letterArray, capital);
    newArray.push(newString);
    }
  console.log(newArray.join(" "));
  }

capitalWords("sk donuts is the only kinda donuts for me");


function simpleSymbols(str) {
  var array = str.split("");
  var pwValid = [];
  for (var i = 0; i < array.length; i++) {
    var letter = array[i];
    var letterBefore = array[i-1];
    var letterAfter = array[i+1];

    if(letter.match(/[a-z]/i) && (letterAfter === "+" && letterBefore === "+")) {
      console.log(letter);
      pwValid.push(letter);
    } else if(letter.match(/[a-z]/i) && (letterAfter !== "+" || letterBefore !== "+")) {
      console.log('ya fucked up!');
      return null;
    }

    else {
      console.log(letter);
  }

}
  console.log(pwValid.join("") + " is valid");
}

simpleSymbols("+d+=+g+===+f+==+f+");

function timeConvert(num) {
  var hour = Math.floor(num/60);
  var minute = num - (hour*60);
  console.log(hour + ":" + minute);
}

timeConvert(650);

Simple function that compares two numbers and tells you whether the first is bigger than the second by returning true or false:


function compareNumbers(int1, int2) {
  if(int1>int2) {
    console.log(true);
  }
  else if(int2 >int1) {
    console.log(false);
  }
  else {
    console.log(-1);
  }
}
compareNumbers(9, 7)


---------- Find the Factorial of any integer ------

function findFactorial(int) {
  var fact = 1;
  var array = [];
  for(i = int; i > 0; i--) {
      var fact = fact*i;
      }
  console.log(fact);
  return fact;
  }


  --------- Find the longest word from a sentence ---------

  function longWord(sen) {
  var senArray = [];
  var compare = "";
  var senArray = sen.split(" ");
  //console.log(senArray);
  for (var i = 0; i < senArray.length; i++) {
    if(senArray[i].length > compare.length) {
      var compare = senArray[i];
    } else {
      return null;
    }
  }
  console.log(compare);
}



------ add all the numbers from one to any integer ----

function addInt(int) {
  var x = 0;
  for (var i = 0; i <= int; i++) {
    var x = x+i;
  }
console.log(x);
}


----- replace every letter of string with following letter, then capitalize all vowels */


function letterChange(str) {
  var strArray = str.split("");
  var newArray = [];
  console.log(strArray);

  for (var i = 0; i < strArray.length; i++) {
    var code = strArray[i].charCodeAt();
    var codeBack = String.fromCharCode(code + 1);
    var newCode = codeBack.toLowerCase();

    if(newCode == "a" || newCode == "e" || newCode == "i" || newCode == "o" || newCode == "u") {
      newArray.push(newCode.toUpperCase());
    } else {
      newArray.push(newCode);
    }
}
console.log(newArray.join(""));
}

---------- return strings letters in Alphabetical Order --------


function alphOrder(str) {
  var array = str.split("");
  for (var i = 0; i < str.length; i++) {
    array.push(str[i]);
    console.log(str[i]);
  }
  console.log(array.sort());
}

alphOrder("amanaplanacanalapanama");


-------- takes a string and returns true if "a" is anywhere in the string seperated from a "b" by three characters, or if contrariwise "b" is anywhere seperated by three spaces from "a" -------

function laneBorrow(str) {
  var wordArray = str.split("");
  for(var i = 0; i < wordArray.length; i++) {
    var letter = wordArray[i];
    var before = wordArray[i-3];
    var after = wordArray[i+3];

    if(letter === "a") {
      if(before === "b" || after === "b") {
        console.log('it works!')
        return true;
      }
      else {
        console.log("eh");
      }
    }
    else if(letter === "b") {
      if(before === "a" || after === "a") {
        console.log('it works!')
        return true;
      }
      else {
        console.log("meh")
      }
    }
}
}
laneBorrow("lanebzzzzzzzzbab")


----- Takes a string and returns the number of vowels in the word ---

function vowelCount(str) {
  var strArray = str.split("");
  var countArray = [];
  for (var i = 0; i < strArray.length; i++) {
    if(strArray[i] === "a" || strArray[i] === "e" || strArray[i] === "i" || strArray[i] === "o" || strArray[i] === "u") {
      console.log("got one!")
      countArray.push(strArray[i]);
      }
      else {
        console.log(strArray[i]);
      }
  }
      console.log(countArray)
      console.log(countArray.length);
}

vowelCount("aeiouaeiouaeiouaeiouaeiou");


------- Word Counter, returns number of words in a string sentence ----



function wordCount(str) {
  var array = str.split(" ");
  console.log(array.length);
}

wordCount("the rain in spain falls mainly on the plain");



-------  checks a string for x's and o's and returns true if they are in equal quantity, and false if not -----------

function checkEx(str) {
  var array = str.split("");
  var arrayX = [];
  var arrayO = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] === "x") {
      arrayX.push(array[i]);
    } else if (array[i] === "o") {
      arrayO.push(array[i]);
    }
  }
  var xlength = arrayX.length;
  var Olength = arrayO.length;
  console.log(arrayX);
  console.log(arrayO);
  console.log(arrayX.length);
  console.log(arrayO.length);
  if(xlength === Olength) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}

checkEx("xxxxxooooo");

------- Palindrome Checker (See if two strings are a palindrome) -------

function dromeChecker(str) {
  var str = str;
  var array = str.split("");
  var revArray = [];
  for(var i = array.length-1; i >= 0; i--) {
    revArray.push(array[i]);
  }
  var revString = revArray.join("");
  if(revString == str) {
    console.log(true);
  } else {
  console.log(false);
}
}

dromeChecker("amanaplanacanalpanama");



---- check to see if a number increases arithmetically (by addition) or geometrically (by a common multiple) ---

function arithGeo(arr) {
  var array = arr;
  var target = array[1];
  var before = array[0];
  var after = array[2];
    if((after - target) === (target - before)) {
      console.log("it's arithmetic!");
    } else if((after/target) === (target/before)){
      console.log("geometric");
    }
  }
arithGeo([5,10,15]);
arithGeo([2,4,6]);


------ Sort a numeric array in descending order  -------

function fancyNumbers(arr) {
  array = arr;
  sortedArray = array.sort(function(a, b) {return b-a});
  console.log(sortedArray);
}

fancyNumbers([3, 4, 6 ,77, 43])

----- sort a numeric array in ascending order -------

function fancyNumbers(arr) {
  array = arr;
  sortedArray = array.sort(function(a, b) {return a-b});
  console.log(sortedArray);
}

fancyNumbers([3, 4, 6 ,77, 43, 6, 77, 234523, 354 ,4]);

some text here to test with
