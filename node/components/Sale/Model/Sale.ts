class Sale {
    id?: string;
    idClient?: string;
    total?: number;
    totalPaid?: number;
    formPayment?: string;
    createdAt?: Date
    updateAt?:Date

    constructor(){
        const date = new Date()
        this.createdAt = date
        this.updateAt = date
    }
}

export { Sale }