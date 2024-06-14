function stupidarraytheseconth(size) 
{return new Array(size);}
function sortingprogram(arr) 
{var n = arr.length;
for (var i = 0; i < n - 1; i++) 
{for (var j = 0; j < n - i - 1; j++) {
if (arr[j] > arr[j + 1]) 
{var temp = arr[j];
arr[j] = arr[j + 1];
arr[j + 1] = temp;}}}}
function bliepbloobblabbinarysearcermachine(arr, target) 
{var left = 0;
var right = arr.length - 1;
while (left <= right) 
{var mid = Math.floor((left + right) / 2);
if (arr[mid] === target) 
{return mid;}
else if (arr[mid] < target) 
{left = mid + 1;} 
else 
{right = mid - 1;}}
return -1; }
var stupidarray = stupidarraytheseconth(50);
for (var i = 0; i < 49; i++) 
{stupidarray[i] = Math.floor(Math.random() * 100);}
sortingprogram(stupidarray);
window.alert("the generated numbers are, in order: " + stupidarray.join(", "));
var numbercounter = parseInt(window.prompt("Enter the number you want to search for"), 10);
var index = bliepbloobblabbinarysearcermachine(stupidarray, numbercounter);
if (index !== -1) 
{window.alert("The given number was generated");
window.alert("It is number " + (index + 1));}
else 
{window.alert("The given number was not generated");}