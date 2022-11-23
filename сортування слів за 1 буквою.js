const array = ['Andriy', 'attack', 'football', 'olga', 'carpet', 'jail'];

function sort(arr){
    let tmp

    for (let i=0;1<arr.length;i++){
        for (let i=0; j<arr.length-i; j++){
            if(arr[j]>arr[j+1]){
                tmp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
        }
    }
}


sort(arr)

console.log(arr)