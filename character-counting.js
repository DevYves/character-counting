// //input -> string

// //output -> returns all the unique characters that exist in the string && how many instances of each letter
// // were found in the string
// // var noSpaces = string.split(" ").join("");

function NewStringBuilder(stringClone){
  var noSpaces = stringClone.split(" ").join("").toLowerCase();

  return noSpaces;
}
// console.log(NewStringBuilder("This is a string with no spaces"));

function countLetters(noSpacesString){
  letterCount ={};
  for (var i = 0; i < noSpacesString.length; i++) {
  var character = noSpacesString[i];

    if (letterCount[character]) {
      letterCount[character]++
    } else {
       letterCount[character] = 1;
      }
  }
return letterCount;
}


console.log(countLetters(NewStringBuilder("This is a string without spaces")));

