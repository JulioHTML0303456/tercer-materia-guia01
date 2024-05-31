function CountVowels(arr) {

    let vocales = ["a", "e", "i", "o", "u"];
    let CDB = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < vocales.length; j++) {

            if (arr[i] === vocales[j]) {
                CDB++
            }
        }
    }
    return CDB
}

console.log(CountVowels("casas"))