function Multiples(arr, n) {
    multiples = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % n == 0) {
            multiples.push(arr[i])
        }
    }
    return multiples
}
console.log (Multiples([2,4,6,12],4))
