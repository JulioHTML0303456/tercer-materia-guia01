function OddIndexs(arr) {
    let suma = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            suma += arr[i]
        }
    }
    return suma ;
}

console.log (OddIndexs([2,4,6,12]))
