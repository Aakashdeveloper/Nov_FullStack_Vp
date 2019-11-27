import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class ProductService {


    private productURL = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';
    constructor(private _http: HttpClient) {

    }

   getProducts(): Observable<IProduct[]> {
       return this._http.get<IProduct[]>(this.productURL);
   }

   getProductDetails(id): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this.productURL}?productId=${id}`);
   }

}
