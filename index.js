var readLineSync = require('readline-sync');

var name = [];
var uni = [];
var pre = [];
var final = [];

for (i=0;i<5;i++)
{
var names = readLineSync.question("what is your name? ");
name.push(names);
var unis  = readLineSync.question("unit test marks? ");
uni.push(unis);
var pres = readLineSync.question("prefinal marks? ");
pre.push(pres);
var finals = readLineSync.question("final marks? ");
final.push(finals);
}

var maxuni = uni[0];
var maxpre = pre[0];
var maxfin = final[0];
var addU = 0;
var addP = 0;
var addF = 0;
var j = 0;
var k=0;
var l=0;

for(i=0;i<5;i++)
{
  if(uni[i]>maxuni)
  {
    maxuni=uni[i]
    j=i

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

avgU = addU/uni.length
avgP = addP/pre.length
avgF = addF/final.length

console.log("Highest unit marks are " + maxuni +" and they were scored by " + name[j]);
console.log("Average unit makrs are " + avgU);

console.log("Highest pre final marks are " + maxpre +" and they were scored by " + name[k]);
console.log("Average pre final makrs are " + avgP);

console.log("Highest final marks are " + maxfin +" and they were scored by " + name[l]);
console.log("Average final makrs are " + avgF);



