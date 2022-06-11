import {Schema, model} from 'mongoose'

interface sellerInterface {
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
}

const SellerSchema = new Schema({
    name: String,
    companyName: String,
    cnpj: String,
    cpf: String,
    segment: String,
    keyId: String,

    address: {
        numberHouse: String,
        street: String,
        district: String,
        city: String,
        state: String,
        country: String,
        zipcode: String,
    },

    createdAt: Date,
})



export default model<sellerInterface>('Seller', SellerSchema)