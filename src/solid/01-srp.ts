(() => {
    interface Product {
        id: number;
        name: string;
    }

    class ProductService {
        getProduct(id: number) {
            console.log("Producto: ", { id, name: "OLED Tv" });
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos
            console.log("Guardando en base de datos", product);
        }
    }

    class Mailer {
        private masterEmail: string = "ignaciojsoler@gmail.com";

        sendEmail(emailList: string[], template: "to-clients" | "to-admin") {
            console.log("Enviado a todos los clientes", template);
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct(id: number) {
            this.productService.getProduct(id);
            // Realiza un proceso para obtener el producto y retornarlo
            console.log("Producto: ", { id, name: "OLED Tv" });
        }

        saveProduct(product: Product) {
            this.productService.saveProduct(product);
            // Realiza una petición para salvar en base de datos
            console.log("Guardando en base de datos", product);
        }

        notifyClients() {
            this.mailer.sendEmail(["email@example.com"], "to-clients");
            console.log("Enviando correo a los clientes");
        }
    }

    class CartBloc {
        private itemsInCart: Object[] = [];

        addToCart(productId: number) {
            console.log("Agregando al carrito ", productId);
        }
    }

    const productService = new ProductService()
    const mailer = new Mailer();
    const cartBloc = new CartBloc();

    const productBloc = new ProductBloc(productService, mailer);

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: "OLED TV" });
    productBloc.notifyClients();
    cartBloc.addToCart(10);
})();
