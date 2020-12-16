        document.addEventListener("DOMContentLoaded", () => {
        var nm11 = new DrawableCanvas(document.getElementById('n11'))
        const nm12 = new DrawableCanvas(document.getElementById('n12'))
        const nm13 = new DrawableCanvas(document.getElementById('n13'))
        const nm21 = new DrawableCanvas(document.getElementById('n21'))
        const nm22 = new DrawableCanvas(document.getElementById('n22'))
        const nm23 = new DrawableCanvas(document.getElementById('n23'))
        const nm31 = new DrawableCanvas(document.getElementById('n31'))
        const nm32 = new DrawableCanvas(document.getElementById('n32'))
        const nm33 = new DrawableCanvas(document.getElementById('n33'))
        const gc = new DrawableCanvas(document.getElementById('g'))

          var mynn = new NeuralNetwork([nm11.getVector(dbg.checked).length,nm11.getVector(dbg.checked).length,3]);

            var training_data=[];
/*
            function softmax(arr) {
    return arr.map(function(value,index) { 
      return Math.exp(value) / arr.map( function(y){ return Math.exp(y) } ).reduce( function(a,b){ return a+b })
    })
}
*/
var softmax = function(ar) {
 return ar.map( x => Math.exp(x) / (ar.map( y => Math.exp(y))).reduce( (a,b) => a+b)) 
};



       var train = document.getElementById("train");
               train.addEventListener('click', () => {


  training_data = [
    [nm11.getVector(dbg.checked), [1,0,0]],
    [nm12.getVector(dbg.checked), [1,0,0]],
    [nm13.getVector(dbg.checked), [1,0,0]],
    [nm21.getVector(dbg.checked), [0,1,0]],
    [nm22.getVector(dbg.checked), [0,1,0]],
    [nm23.getVector(dbg.checked), [0,1,0]],
    [nm31.getVector(dbg.checked), [0,0,1]],
    [nm32.getVector(dbg.checked), [0,0,1]],
    [nm33.getVector(dbg.checked), [0,0,1]],
  ];
/*
  console.log("Before training...");
  console.log('0 AND 0',mynn.feedforward([0,0]));
  console.log('0 AND 1',mynn.feedforward([0,1]));
  console.log('1 AND 0',mynn.feedforward([1,0]));
  console.log('1 AND 1',mynn.feedforward([1,1]));
  */
  // several training epochs
  for(let i=0; i<10000; i++) {
    let tdata = training_data[Math.floor(Math.random() * training_data.length)];
    mynn.train(tdata[0], tdata[1]);
  }
})
       var guess = document.getElementById("guess");
               guess.addEventListener('click', () => {

function maxOfThree(num1, num2, num3) {
   if (num1 > num2 && num1 > num3) {
       return 1;
   } else if (num2 > num1 && num2 > num3) {
       return 2;
   } else {
       return 3;
   }
}
function chance(index_i){
return (result[index_i]/(result[0] + result[1] + result[2]) * 100).toFixed(2);
}
var result = mynn.feedforward(gc.getVector(dbg.checked));
console.log('Это цифра ' + maxOfThree(result[0],result[1],result[2]));
console.log('Шанс на 1: ' + chance(0) + '%');
console.log('Шанс на 2: ' + chance(1) + '%');
console.log('Шанс на 3: ' + chance(2) + '%');
//softmax1=softmax(result);
  console.log('result is');
  console.log(result);

  /*
  console.log('softmax is');
  console.log(softmax1);
    console.log('Сумма: ');
    console.log(result[0]+result[1]+result[2]);
    if(result[0]+result[1]+result[2] < 1){
result[0] = result[0] + (1 - (result[0]+result[1]+result[2]))/3;
result[1] = result[1] + (1 - (result[0]+result[1]+result[2]))/3;
result[2] = result[2] + (1 - (result[0]+result[1]+result[2]))/3;
console.log('Шанс на 1: ' + Math.ceil((result[0]*100)) + '%');
console.log('Шанс на 2: ' + Math.ceil((result[1]*100)) + '%');
console.log('Шанс на 3: ' + Math.ceil((result[2]*100)) + '%');
} else{
result[0] = result[0] + ((result[0]+result[1]+result[2]) - 1)/3;
result[1] = result[1] + ((result[0]+result[1]+result[2]) - 1)/3;
result[2] = result[2] + ((result[0]+result[1]+result[2]) - 1)/3;
console.log('Шанс на 1: ' + Math.ceil((result[0]*100)) + '%');
console.log('Шанс на 2: ' + Math.ceil((result[1]*100)) + '%');
console.log('Шанс на 3: ' + Math.ceil((result[2]*100)) + '%');
}
*/
  console.log(mynn.copy());
  gc.reset();

})

/*
var train = document.getElementById("train");
               train.addEventListener('click', () => {
                var img11 = document.getElementById("i11");
var img12 = document.getElementById("i12");
var img13 = document.getElementById("i13");
var img21 = document.getElementById("i21");
var img22 = document.getElementById("i22");
var img23 = document.getElementById("i23");
var img31 = document.getElementById("i31");
var img32 = document.getElementById("i32");
var img33 = document.getElementById("i33");
var img41 = document.getElementById("i41");
var img42 = document.getElementById("i42");
var img43 = document.getElementById("i43");

img11.crossOrigin = "Anonymous"; 
img12.crossOrigin = "Anonymous";
img13.crossOrigin = "Anonymous";
img21.crossOrigin = "Anonymous";
img22.crossOrigin = "Anonymous";
img23.crossOrigin = "Anonymous";
img31.crossOrigin = "Anonymous";
img32.crossOrigin = "Anonymous";
img33.crossOrigin = "Anonymous";
img41.crossOrigin = "Anonymous";
img42.crossOrigin = "Anonymous";
img43.crossOrigin = "Anonymous";
gc.crossOrigin = "Anonymous";

var nmm11 = document.getElementById("n11");
var nmm12 = document.getElementById("n12");
var nmm13 = document.getElementById("n13");
var nmm21 = document.getElementById("n21");
var nmm22 = document.getElementById("n22");
var nmm23 = document.getElementById("n23");
var nmm31 = document.getElementById("n31");
var nmm32 = document.getElementById("n32");
var nmm33 = document.getElementById("n33");
var gcc = document.getElementById("g");

var nm110 = nmm11.getContext('2d');
var nm120 = nmm12.getContext('2d');
var nm130 = nmm13.getContext('2d');
var nm210 = nmm21.getContext('2d');
var nm220 = nmm22.getContext('2d');
var nm230 = nmm23.getContext('2d');
var nm310 = nmm31.getContext('2d');
var nm320 = nmm32.getContext('2d');
var nm330 = nmm33.getContext('2d');
var gc0 = gcc.getContext('2d');

nm110.drawImage(img11,0,0);
nm120.drawImage(img12,0,0);
nm130.drawImage(img13,0,0);
nm210.drawImage(img21,0,0);
nm220.drawImage(img22,0,0);
nm230.drawImage(img23,0,0);
nm310.drawImage(img31,0,0);
nm320.drawImage(img32,0,0);
nm330.drawImage(img33,0,0);

nm11.crossOrigin = "Anonymous"; 
nm12.crossOrigin = "Anonymous";
nm13.crossOrigin = "Anonymous";
nm21.crossOrigin = "Anonymous";
nm22.crossOrigin = "Anonymous";
nm23.crossOrigin = "Anonymous";
nm31.crossOrigin = "Anonymous";
nm32.crossOrigin = "Anonymous";
nm33.crossOrigin = "Anonymous";
gc.crossOrigin = "Anonymous";





  training_data = [
    [nm11.getVector(dbg.checked), [1,0,0]],
    [nm12.getVector(dbg.checked), [1,0,0]],
    [nm13.getVector(dbg.checked), [1,0,0]],
    [nm21.getVector(dbg.checked), [0,1,0]],
    [nm22.getVector(dbg.checked), [0,1,0]],
    [nm23.getVector(dbg.checked), [0,1,0]],
    [nm31.getVector(dbg.checked), [0,0,1]],
    [nm32.getVector(dbg.checked), [0,0,1]],
    [nm33.getVector(dbg.checked), [0,0,1]],
  ];
    for(let i=0; i<10000; i++) {
    let tdata = training_data[Math.floor(Math.random() * training_data.length)];
    mynn.train(tdata[0], tdata[1]);
  }
})

         var guess = document.getElementById("guess");
               guess.addEventListener('click', () => {
                function maxOfThree(num1, num2, num3) {
   if (num1 > num2 && num1 > num3) {
       return 'Это Зима';
   } else if (num2 > num1 && num2 > num3) {
       return 'Это Лето';
   } else {
       return 'Это Осень';
   }
}
gc.drawImage(img42);
var result = mynn.feedforward(gc.getVector(dbg.checked));
console.log(maxOfThree(result[0],result[1],result[2]));
softmax1=softmax(result);
  console.log('result is');
  console.log(result);
  console.log('softmax is');
  console.log(softmax1);
  console.log(mynn.copy());
  gc.reset();

  gc.drawImage(img41);
var result = mynn.feedforward(gc.getVector(dbg.checked));
console.log(maxOfThree(result[0],result[1],result[2]));
softmax1=softmax(result);
  console.log('result is');
  console.log(result);
  console.log('softmax is');
  console.log(softmax1);
  console.log(mynn.copy());
  gc.reset();

  gc.drawImage(img43);
var result = mynn.feedforward(gc.getVector(dbg.checked));
console.log(maxOfThree(result[0],result[1],result[2]));
softmax1=softmax(result);
  console.log('result is');
  console.log(result);
  console.log('softmax is');
  console.log(softmax1);
  console.log(mynn.copy());
  gc.reset();

               })
               */

             });
