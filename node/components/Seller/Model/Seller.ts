

class Seller {

    name?: string;
    companyName?: string;
    cnpj?: string;
    cpf?: string;
    segment?: string;
    keyId?: string;

    address?: {
        numberHouse?: string,
        street?: string;
        district?: string;
        city?: string;
        state?: string;
        country?: string;
        zipcode?: string
    }
    createdAt?: Date;


    constructor () {
        this.createdAt = new Date()
    }
}

export { Seller }