import { Product } from './../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    public url = "http://localhost:3000/v1/";

    public composeHeaders() {
        const token = localStorage.getItem('petshop.token');
        const headers = new HttpHeaders().set('Authorization', `bearer ${token}`!);
        return headers;
    }

    constructor(private http: HttpClient) { }


    getProducts() {
        return this.http.get<Product[]>(`${this.url}/products`);
    }

    authenticate(data: any) {
        return this.http.post(`${this.url}/accounts/authenticate`, data);
    }

    refreshToken() {
        return this.http.post(`${this.url}/accounts/refresh-token`, null, { headers: this.composeHeaders() });
    }
}