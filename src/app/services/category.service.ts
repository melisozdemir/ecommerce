import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://fakestoreapi.com/products/categories';

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<[]> {
    return this.httpClient.get<[]>(this.apiUrl);
  }
}

