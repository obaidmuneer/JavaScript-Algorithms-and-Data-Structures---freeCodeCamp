const multiDimArr = (m, n) => {
    const arr = []
    let row = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            row.push(0)
        }
        arr.push(row)
        row = []
    }
    return arr
}

const matrix = multiDimArr(3, 4)
console.log(matrix);