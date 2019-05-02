var words = ["ground", "control", "to", "major", "tom"];


function callmap(list,cl){
var arr=[];
   for(var element of list){
  //console.log(list);
     var b=cl(element);

     arr.push(b);
 }
 return arr;


}
console.log(callmap(words, function(word) {
 return word.length;
}));

console.log(callmap(words, function(word) {
 return word.toUpperCase();
}));

console.log(callmap(words, function(word) {
 return word.split('').reverse().join('');
}));