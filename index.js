var readLineSync = require('readline-sync');

var name = [];          //defined arrays
var uni = [];
var pre = [];
var final = [];


//created a for loop to ask for 5 students
for (i=0;i<5;i++)
{
var names = readLineSync.question("what is your name? ");  //used a different variable to take input
name.push(names); //used .push to push the value into array that we got from the variable
var unis  = readLineSync.question("unit test marks? ");
uni.push(unis);
var pres = readLineSync.question("prefinal marks? ");
pre.push(pres);
var finals = readLineSync.question("final marks? ");
final.push(finals);
}

var maxuni = uni[0]; //maxuni taken to calculate the highest marks
var maxpre = pre[0];  //taking them initiall with index 0 can help
var maxfin = final[0]; // in comparing with other ele using for loop
var addU = 0;
var addP = 0;
var addF = 0;
var j = 0;
var k=0;
var l=0;

for(i=0;i<5;i++)     //for loop for calculating the highest marks and name
{
  if(uni[i]>maxuni)  //if loop to calculate highest marks
  {
    maxuni=uni[i]
    j=i              //variable j for finding out the corresponding name of the highest marks

  }

  addU = addU + parseInt(uni[i]);



  if(pre[i]>maxpre)
  {
    maxpre=pre[i];
    k=i
  }

  addP = addP + parseInt(pre[i]);

  if(final[i]>maxfin)
  {
    maxfin=final[i]
    l=i
  }
  addF = addF + parseInt(final[i])
}

avgU = addU/uni.length    //defined new variables to calculate the avg of the marks
avgP = addP/pre.length
avgF = addF/final.length

console.log("Highest unit marks are " + maxuni +" and they were scored by " + name[j]);
console.log("Average unit makrs are " + avgU);

console.log("Highest pre final marks are " + maxpre +" and they were scored by " + name[k]);
console.log("Average pre final makrs are " + avgP);

console.log("Highest final marks are " + maxfin +" and they were scored by " + name[l]);
console.log("Average final makrs are " + avgF);



