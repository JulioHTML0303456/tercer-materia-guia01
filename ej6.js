function CountConsonants(arr) {

    let vocales = ["a", "e", "i", "o", "u"];
    let CDC = 0;

    for (let i = 0; i < arr.length; i++) {
        vocal = false;
        for (let j = 0; j < vocales.length; j++) {
            if (arr[i] === vocales[j]) {
                vocal = true;
                break;
            }

        }
        if (!vocal) {
            CDC++
        }
    }
    return CDC
}

console.log(CountConsonants("casas"))