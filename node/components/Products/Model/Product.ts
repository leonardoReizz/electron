class Product {
    id?: number;
    nameProduct?: string;
    codebar?: string;
    createdAt?: Date;
    updateAt?: Date;

    constructor(props: Omit<Product, 'id'>, id?: number){
        const date = new Date()
        this.createdAt = date;
        this.updateAt = date;

        Object.assign(this, props);
    }
}

export { Product }