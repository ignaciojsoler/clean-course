class Product {
    constructor(
        public name: string,
    ) {}
};

(() => {
    const bluePants = new Product("Blue large pants");
    console.log(bluePants);
})()