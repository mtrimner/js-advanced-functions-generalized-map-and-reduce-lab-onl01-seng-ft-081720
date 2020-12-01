

function map(array, cb){
    let newArray = []
    for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]))
    }
    return newArray
}

function reduce(array, cb, starting=null){
    let answer;
    let i
    if (starting === null) {
        answer = array[0]
        i = 1
    } else {
        answer = starting
        i = 0
    }
    for (i; i < array.length; i++) {
       answer = cb(array[i], answer)
    }
    return answer
}