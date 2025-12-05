import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Modelos } from "../../Model/modelo";



@Injectable({
    providedIn: 'root'
})

export class ModelosService {
    public url : string = 'https://fakestoreapi.com';

    constructor(
        private _http: HttpClient
    ){}

    getProductos():Observable<Modelos[]>{
       return this._http.get<Modelos[]>(this.url + '/products')
    }

    getJewerly():Observable <any>{
        var headers = new HttpHeaders().set('Content-Type' , 'application/json');
        return this._http.get(this.url + '/products/category/jewelery' , { headers : headers})
    } 

    getElectronic(): Observable <any>{
        var headers = new HttpHeaders().set('Content-Type' , 'application/json');
        return this._http.get(this.url + '/products/category/electronics' , { headers : headers})
    }

    getMenClothing(): Observable <any>{
        var headers = new HttpHeaders().set('Content-Type' , 'application/json');
        return this._http.get(this.url + "/products/category/men's clothing" , { headers : headers})
    }

    getWomenClothing(): Observable <any>{
        var headers = new HttpHeaders().set('Content-Type' , 'application/json');
        return this._http.get(this.url + "/products/category/women's clothing" , { headers : headers})
    }

    getDetailJewerly():Observable <any>{
        var headers = new HttpHeaders().set('Content-Type' , 'application/json');
        return this._http.get(this.url + '/products/category/jewelery', { headers : headers});
    }

    getProductDetail(id: number | string ):Observable <Modelos>{
    return this._http.get<Modelos>(`${this.url}/products/${id}`)
    }  
}