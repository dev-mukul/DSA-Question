// String Anagram
// 'hello' -> 'llheo'
// 'ajay'  -> 'aaay'



//condition 
// length check {for Both string}
// String 'hello'
// {h:1, e:1, l:2, o:1}

function isAnagram(string1, string2){
    if(string1.length!=string2.length){
        return false;
    }
    let counter ={}
    for(let letter of string2){
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter[letter]);
    }
    for(let items of string2){
        if(!counter[items]){
            return false;
        }
        counter[items]-=1;
    }
    return true;

}
const check = isAnagram('hello', 'lleo');
console.log(check);

