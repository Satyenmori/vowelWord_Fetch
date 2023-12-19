// Normal function make ....................................
 let str=prompt("Enter Your Line");

// function vowel(str) {
//     count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
            
//         }
//     }    
//     document.write(`Your Line is ${str}, this line ${count} alphabet is Vowel`);
// }
// vowel(str)


// Arrow function use...........................................................................

let vowel=(str)=>{
  let count=0;
    for(let char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++
        }
    }
       document.write(`Your Line is <b>${str}</b>, this line <U>${count}</U> alphabet is Vowel`);
    //console.log(count);
}
vowel(str);
