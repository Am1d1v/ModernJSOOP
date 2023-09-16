


class Product {

    constructor(brand, price, discount){
        this.brand = brand;
        this.price = price;
        this.discount = discount;
    }

    getTotalPrice(){
        return this.price * ((100 - this.discount) / 100);
    }

    static sum(x, y){
        return x + y
    }
}

const product1 = new Product('BrandName', 1000, 15);
console.log(product1);
console.log(product1.getTotalPrice());
console.log(Product.sum(10, 10));

