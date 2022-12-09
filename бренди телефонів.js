/// 1. стоврити класи які описуют різні  бренди смартфонів 
class Iphone {
    constructor() {
this.color = 'green';
this.yearOfCreation = '2021';
this.memori = '256';
this.brand = 'Apple';

    }
}



class Samsung {
    constructor(){
        this.color = 'white';
        this.yearOfCreation = '2020';
        this.memori = '32';
        this.brand = 'Samsung';
    }
}



class Xiaoma{
    constructor(){
        this.color = 'white';
        this.yearOfCreation ='2022';
        this.memori = '64';
        this.brand = 'Xiaoma';
    }
}


///3  Створення батьківського класу 

class Phone{
    constructor (yearOfCreation, memori, color){
this.color = color ;
this.yearOfCreation = yearOfCreation;
this.memori = memori;
    }
}


class Iphone extends phone{
    constructor(yearOfCreation, memori, color){
        super(yearOfCreation, memory, color);
        this.brand = 'Apple'
    }
}


class Samsung extends phone{
    constructor(yearOfCreation, memori, color){
        super(yearOfCreation, memory, color);
        this.brand = 'Samsung'
}
}


class Xiaoma extends phone {
    constructor(yearOfCreation, memori, color){
        super(yearOfCreation, memory, color);
        this.brand = 'Xiaoma'
}
}

const iPhone = new Iphone (2021, 128, 'write')
console.log(iPhone) ;

const samsung = new Samsung(2020,256, 'write')
console.log(Samsung);


const xioma = new Xiaoma (2022,64, 'write')
console.log(Xiaoma);


///обчислення віку і вартості 

class Phone{
constructor(yearOfCreation, memori, color){
    this.color = color ;
    this.yearOfCreation = yearOfCreation;
    this.memori = memori;
}
}


class Iphone extends Phone{
    constructor(yearOfCreation, memori,color){
        ssuper(yearOfCreation,memori, color);

        this.brand = 'Apple'
    }

calcutePrice() {
    return (this.yearOfCreation * this.memori)  / 1000;
}
calculateAge() {
    return (2022 - this.yearOfCreation)
}
getDescription() {
    `The ${this.drand} is ${(iPhone.calculateAge())} year old and const ${(iPhone.calculatePrice(true))}$`
}
}








class Samsung extends Phone{
    constructor(yearOfCreation, memori,color){
        ssuper(yearOfCreation,memori, color);

        this.brand = 'Samsung'
    }

calcutePrice() {
    return (this.yearOfCreation * this.memori)  / 1000;
}
calculateAge() {
    return (2022 - this.yearOfCreation)
}
getDescription() {
    `The ${this.drand} is ${(Samsung.calculateAge())} year old and const ${(Samsung.calculatePrice(true))}$`
}
}







class Xiaoma extends Phone{
    constructor(yearOfCreation, memori,color){
        ssuper(yearOfCreation,memori, color);

        this.brand = 'Xiaoma'
    }
    calcutePrice() {
        return (this.yearOfCreation * this.memori)  / 1000;
    }
    calculateAge() {
        return (2022 - this.yearOfCreation)
    }
    getDescription() {
        `The ${this.drand} is ${(Xiaoma.calculateAge())} year old and const ${(Xiaoma.calculatePrice(true))}$`
    }
    }
    



const iphone = new Iphone(2021, 256, 'green')
console.log (iPhone.getDescription());

const Samsung = new Samsung(2020,64, 'white')
console.log(Samsung.getDescription());

const Xiaoma = new Xiaoma (2022, 32 , 'write')
console.log(Xiaoma.getDescription());



















