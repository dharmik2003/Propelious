// Write a function that takes an array and a chunk size as parameters and divides the array into chunks of the specified size Const data =[1, 2, 3, 4, 5, 6, 7, 8, 9] Input = 3 Expected output = [[1,2,3],[ 4, 5,6],[7, 8,9]]

var a= [[1,2,3],[ 4, 5,6],[7, 8,9]]
console.log(a);
function printMatrix(matrix) {
    for (i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "))
    }
    }
printMatrix(a);




