


class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo = function(){
        return `Name: ${this.name}, Age: ${this.age} `
    }
}


class Customer extends User {
    constructor(name, age){
        super(name, age);
        
    }
}

const customer = new Customer('Dima', 20);
console.log(customer);
console.log(customer.getInfo());