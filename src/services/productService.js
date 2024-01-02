import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("https://fakestoreapi.com/products/");
    }
    
    getByProductId(id) {
        return axios.get("https://fakestoreapi.com/products/"+ id);
    }
}