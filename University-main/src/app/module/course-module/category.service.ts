import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Category } from "src/model/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:5207/api/Category';

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(this.apiUrl);
  }

  getCategoryById(id: number): Observable<Category> {
    const url = `${this.apiUrl}/${id}`;

    return this._http.get<Category>(url);
  }
}