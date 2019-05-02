function findWaldo(arr, found)
{
arr.forEach(function(element,index)
  {
   if (element == "Waldo") {
    var a=index;

     found(a);   // execute callback
   }
 });
}
function actionWhenFound(a) {
 console.log("Found Waldo at index "+a);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);