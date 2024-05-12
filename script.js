function firstNonRepeatedChar(str) {
    let set = new Set();
    for(let i = 0; i < str.length; i++) {
        if(set.has(str[i])) {
            return str[i];
        }
        set.add(str[i]);
    }
    return null;
}

// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
