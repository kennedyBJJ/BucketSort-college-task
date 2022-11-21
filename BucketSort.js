var unsortedArray = [3,2,1,-1,0,0,333, -333, 444,442.32,32321.12]
// bucket sort values into buckets in which values are grouped by their range
// then for each bucket(bucket is an array) we run an insertion sort on it
function insertionSort(inputArray){
    if(inputArray.length < 2) return inputArray
    for(let i=1; i<inputArray.length; i++){
        let temp = inputArray[i]
        for(var j = i-1; j>=0 && inputArray[j]>temp; j--){
            inputArray[j+1] = inputArray[j]
        }
        inputArray[j+1] = temp
    }
    return inputArray
}
// var unsortedArray = [9,8,7,6,5,4,3,2,1,0]


function bucketSort(inputArray){
    if(inputArray.length < 2) return inputArray
    let minValue = inputArray[0]
    let maxValue = inputArray[0]
    for(let value of inputArray){
        if(value > maxValue){
            maxValue = value
        } else if (value < minValue){
            minValue = value
        }
    }
    let bucketRange = 5
    let bucketArraySize = Math.floor((maxValue - minValue) / bucketRange) + 1 
    let bucketArray = Array.from({length:bucketArraySize}, ()=>[])
    for(let value of inputArray){
        bucketArray[Math.floor((value - minValue)/bucketRange)].push(value)
    }
    for(let value of bucketArray){
        insertionSort(value)
    }
    return [].concat(...bucketArray)
}
console.log(bucketSort(unsortedArray.slice()))