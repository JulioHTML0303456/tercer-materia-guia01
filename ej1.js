/*let arr = [2,4,6,12];*/

function Average(arr) {
    let suma = 0;
    let promedio = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i]
        promedio = suma / arr.length
    }
    return promedio
}
console.log(Average([9,2,1,19,22]))
