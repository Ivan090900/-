const numbers = [7,10,15,23,29,28];
function linerSerach (array, num){
    for (let i = 0 ; i < array.length; i++ ){
        if (array [i] === num ){
            return i;
        }
    }
    return -1;
}console.log (linearSearch(number, 18))
