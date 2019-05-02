var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
  ];
  var result = input.map(function(num) {
   var z = Math.pow(num["x"], 2) + Math.pow(num["y"], 2)
   return Math.sqrt(z)
  })
  
  // 1) access the array through num["x"] && num["y"]
  // 2) square Math.pow(num["x"], 2) + Math.pow(num["y"], 2)
  // 3) store z for step 2. 
  // 4) return z Math.sqrt(z);
  
  // console.log(result[0] === 5);
  // console.log(result[1] === 13);
  // console.log(result[2] === 17);
  
  console.log(result)