const rapid = (str) => {

    // let newstr = str.replace(/[aeiou]/g,""); //Expresion regular
    let newstr = "";
    for(let i = 0; i < str.length; i++){

        if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
           newstr = newstr + str[i];
        };
    }
   
    let newUperstr = newstr.toUpperCase()
    
    return newUperstr;
};
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));