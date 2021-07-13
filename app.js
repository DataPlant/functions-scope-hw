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