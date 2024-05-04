type Size = '' | 's' | 'm' | 'xl'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) {}

    isProductReady (): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (!(<string>this[key]).length) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    console.log(this[key]);
                    if (<number>this[key] < 1) throw Error(`${key} should be bigger than 0`);
                default:
                    break;
            }
        }

        return true;
    }

    toString() {
        //No DRY
        // if (!this.name.length) throw Error("Name is empty");
        // if (this.price <= 0) throw Error("Price is empty");
        // if (!this.size.length) throw Error("Name is empty");

        //DRY
        if (!this.isProductReady()) return;

        return `${this.name} ${this.price} ${this.size}`;
    }
};

(() => {
    const bluePants = new Product("Blue large pants", 1, "xl");
    console.log(bluePants.toString());
})()