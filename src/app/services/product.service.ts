import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://fakestoreapi.com/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<Product[]> {
    let newPath = this.apiUrl + "products"
    return this.httpClient.get<Product[]>(newPath);
  }

  getProductsByCategory(category:string):Observable<Product[]> {
    let newPath = this.apiUrl + "products/category/"+category
    return this.httpClient.get<Product[]>(newPath);
  }


  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
  }
}
