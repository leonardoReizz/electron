

interface ISale {
    id?: string,
    idClient: string,
    total: number,
    totalPaid: number,
    formPayment: string,
    createdAt: Date,
    updateAt: Date

}

export { ISale }