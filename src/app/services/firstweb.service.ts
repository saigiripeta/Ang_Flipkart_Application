import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FakeProductContract } from "../contracts/fakeproductscontract";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root"
})

export class FirstwebService {
    constructor(private http:HttpClient) { }

    public GetProducts(): Observable<FakeProductContract[]>{
      return this.http.get<FakeProductContract[]>('https://fakestoreapi.com/products');
    }

    public GetProductID(id:string):Observable<FakeProductContract >{
        return this.http.get<FakeProductContract >('https://fakestoreapi.com/products/'+id);
    }
    public GetCategories():Observable<string[]>{
        return this.http.get<string []>('https://fakestoreapi.com/products/categories');
    }
    public GetProductByName(categoryName:string):Observable<FakeProductContract[]>{
        return this.http.get<FakeProductContract[]>('https://fakestoreapi.com/products/category/'+categoryName);
    }
}