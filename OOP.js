

//const str = new String('Hello');
//console.log(str);

function Product(brand, price, discount){
    
    this.brand = brand;
    this.price = price;
    this.discount = discount;

    this.getTotalPrice = function (){
        return this.price * ((100 - this.discount) / 100)
    }
}

const product1 = new Product('BrandName1', 1000, 15);
console.log(product1.getTotalPrice());


