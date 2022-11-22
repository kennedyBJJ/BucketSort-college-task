// agrupar valores em baldes de acordo com o intervalo definido de cada balde
// então, para cada balde(balde é um vetor), os ordenamos usando o insertionSort
function insertionSort(inputArray) {
    if (inputArray.length < 2) {
      return inputArray
    }
  
    for (let i = 1; i < inputArray.length; i++) {
      let temp = inputArray[i]
      for (var j = i - 1; j >= 0 && inputArray[j] > temp; j--) {
        inputArray[j + 1] = inputArray[j]
      }
      inputArray[j + 1] = temp
    }
    return inputArray
  }
  
  function bucketSort(inputArray) {
    //vetor de tamanho 1 já está ordenado
    if (inputArray.length < 2) {
      return inputArray
    }
  
    //encontrar o valor máximo e o valor mínimo do vetor
    let minValue = inputArray[0]
    let maxValue = inputArray[0]
    for (let value of inputArray) {
      maxValue = (value > maxValue) ? value : maxValue
      minValue = (value < minValue) ? value : minValue
    } /*equivalente a:
          for(let i = 0; i<inputArray.length;i++ ){
              let value = inputArray[i]
              maxValue = (value > maxValue)? value : maxValue
              minValue = (value < minValue)? value : minValue
      }
      */
  
    //definir a quantidade de baldes e a extensão de cada um
    let bucketRange = 100
    let bucketArraySize = Math.floor((maxValue - minValue) / bucketRange) + 1
    let bucketArray = Array.from({ length: bucketArraySize }, () => [])  /** equivalente a:                                           let bucketArray = [] 
          for(let i=0 ; i<bucketArraySize ; i++){
          bucketArray[i] = []
          }
          */
  
    //inserir os valores nos baldes
    for (let value of inputArray) {
      bucketArray[Math.floor((value - minValue) / bucketRange)].push(value)
    }
  
    //ordenar os baldes
      for (let value of bucketArray) {
        insertionSort(value)
      }
    return [].concat(...bucketArray)
  }
  
  var unsortedArray = createRandomArray(10000000)
  
  var sortedArray = []
  
  start()
  sortedArray = bucketSort(unsortedArray)
  console.log(sortedArray)
  end()
  
  function start() {
    startTime = new Date();
  };
  
  function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
  
    // get seconds 
    var seconds = timeDiff;
    console.log(seconds + " seconds");
  }
  
  function createRandomArray(size, min =0, max = 10000000) {
    const array = []
    for (let i = size; i > 0; i--) {
      array.push(parseInt(Math.random() * (max - min) + min));
    }
    return array;
  }