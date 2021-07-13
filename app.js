// 1. What is the difference between a **parameter** and an **argument**?
// A parameter is an attribute of a function, and arguement is a limiter that provides context for the function.
// 2. Within a function, what is the difference between **return** and **console.log**?
//return outputs values back, meaning it could be variables or the output could be input into another func, loop, or variable. The console.log() is literally just a print function that prints to the console.
// 3. What are the implications of the ability of a function to return a value?
//Well if it can't return a value, the function has a lot less purpose than before, as calling a function would pretty much end a chain process. If you can't return a value, then the function can only really alter already created variables and output text.

/////////////////////PALINDROME
function checkPalindrome(word){
    const lowWord = word.toLowerCase();
    const revWord = lowWord.split('').reverse().join('');
    if(lowWord === revWord){
        console.log("The word is a palindrome")
    }
    else{
        console.log("The word is not a palindrome")
    }
}
checkPalindrome("Radar");
checkPalindrome("Cat");
// function checkPalindrome(word){
//     const lowWord = word.toLowerCase();
//     const revWord = lowWord.split('').reverse().join('');
//     return lowWord === revWord;
// }
// console.log(wordIsPaindrome);


/////////////////////CHECK A LIST
const studentIncluded =  checkForStudent('Sally', ['Sally', 'Kyle']);
function checkForStudent(name, checkList){
    for(let i=0; i<checkList.length; i++){
        if(name === checkList[i]){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(studentIncluded);

const studentIncluded2 =  checkForStudent2('Ron', ['Sally', 'Kyle']);
function checkForStudent2(name, checkList){
    for(let i=0; i<checkList.length; i++){
        if(name === checkList[i]){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(studentIncluded2);

/////////////////////SUM ARRAY
const sum = sumArray([1, 2, 3, 4, 5, 6]);
function sumArray(a){
    let total = 0;
    for(let i=0; i<a.length; i++){
        total += a[i];
    }
    return total;
}
console.log(sum);

/////////////////////DIGIT SUM
const sum2 = sumDigits(42);
function sumDigits(num){
    const output = [];
    let sNum = num.toString();
    let total = 0;
    for(let i=0; i<sNum.length; i++){
        output.push(sNum.charAt(i))
    }
    const final = output.map((i) => Number(i));
    console.log(final)
    for(let i=0; i<final.length; i++){
        total += final[i];
    }
    return total;
}
console.log(sum2);

/////////////////////PYTHAGORAS
const sideC = calculateSide(8, 6);
function calculateSide(sideA, sideB){
    let sideC = Math.sqrt(sideA**2 +sideB**2)
    return sideC;
}
console.log(sideC);
/////////////////////PRIME NUMBERS
function checkPrime(num){
    if(num === 2){
        return true
    }
    else if(num > 2){
        for(let i = 2; i<num; i++){
            if(num % i !== 0){
                return true
            }
            else if(num === i**2){
                return false
            }
            else{
                return false
            }
        }
    }
    else{
        return false
    }
}
function printPrimes(num){
    for(let i= 1; i<=num; i++){
        let result = checkPrime(i);
        if(result === true){
            console.log(i)
        }
    }
}

printPrimes(97);
/////////////////////INSERT DASH
// const numWithDashes = insertDash(454793);
// function insertDash(num){
//     let strNum = num.toString();
//     let splitNum = []
//     for(let i=0; i<strNum.length; i++){
//         splitNum.push(strNum.charAt(i))
//     }
//     for(let i=1; i<splitNum.length; i++){
//         if(isOdd(splitNum[i]) === true && isOdd(splitNum[--i]) === true){
//             splitNum.splice(i, 0, '-');
//         }
//     }
//     splitNum.join()
//     console.log(splitNum)
//     return splitNum
// }
// function isOdd(num){
//     if(num%2 === 0){
//         return false;
//     }
//     else{
//         return true;
//     }
// }
// console.log(numWithDashes);
////////////////////////////// reverse string
function reverseString(stringName){
    let reversedWord= '';
    for(let i=stringName.length; i>=0; --i){
        reversedWord += stringName.charAt(i)
    }
    console.log(reversedWord)
}
reverseString('apples');
////////////////////////////// back to palindrome
function newPali(word){
    const lowWord = word.toLowerCase().split('');
    const revWord = lowWord.reverse();
    spaceDeleter(lowWord);
    spaceDeleter(revWord);
    punctDeleter(lowWord);
    punctDeleter(revWord);
    console.log(revWord)
    if(lowWord === revWord){
        console.log("The word is a palindrome")
    }
    else{
        console.log("The word is not a palindrome")
    }
}
function spaceDeleter(word){
    for(let i=0; i<word.length; i++){
        if(word[i] === " "){
            word.splice(i,1);
            i--; //this would balance the index shifting from the splice i think
        }
    }
}
function punctDeleter(word){
    for(let i=0; i<word.length; i++){
        if(word[i] === "?"||word[i] === "!"||word[i] === "."||word[i] === ","||word[i] === ":"||word[i] === '"'){
            word.splice(i,1);
            i--; //this would balance the index shifting from the splice i think
        }
    }
}
newPali('Sit on a potato pan Otis')
newPali("Cigar? Toss it in a can! It is so tragic.")

function wordPali(word){
    let lowWord = word.toLowerCase().split('');
    let revWord = lowWord;
    punctDeleter(lowWord);
    punctDeleter(revWord);
    lowWord = lowWord.join('').split(' ')
    revWord = revWord.join('').split(' ').reverse()
    
    console.log(lowWord)
    console.log(revWord)
    truthCounter = 0
    for(let i=0; i<lowWord.length; i++){
        if(lowWord[i] !== revWord[i]){
            console.log("The phrase is NOT a palindrome")
            truthCounter -= 5
        }
        truthCounter++;
    }
    if(truthCounter === lowWord.length){
        console.log("The phrase is a palindrome")
    }
}
wordPali('"Son, I am able," she said. "Though you scare me, watch!" said I, "Beloved," I said, "watch me scare you!" Though, said she: "able am I, son."')