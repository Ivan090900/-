const array = ['inna', 'attack', 'max', 'olga', 'dima', 'jail'];




function bubbleSort(array){

  for (let j = 0; j < array.length; j++){

    for (let i = 0; i < array.length - 1; i++){

      if (array[i][1] > array[i + 1][1]){

        const result = array[i]

        array[i] = array[i + 1]

        array[i + 1] = result

      }

    }

  }

  console.log(array)

}




bubbleSort(array);