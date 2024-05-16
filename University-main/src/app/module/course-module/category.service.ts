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



























































// createCategory(category: Category): Observable<Category> {
//   return this._http.post<Category>(this.apiUrl, category);
// }

// updateCategory(category: Category): Observable<Category> {
//   const url = `${this.apiUrl}/${category.id}`;
//   return this._http.put<Category>(url, category);
// }

// deleteCategory(id: number): Observable<void> {
//   const url = `${this.apiUrl}/${id}`;
//   return this._http.delete<void>(url);
// }


//   getCategories(): Observable<Category[]> {
//     return this.http.get<Category[]>(this.apiUrl);
//   }
//   getCategoryById(id: number): Observable<Category> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.get<Category>(url);
//   }

// @Injectable()
// export class CategoryService {
//     constructor(private _http: HttpClient) { }

//     // getCategories(): Observable<Category[]> {
//     //     return this._http.get<Category[]>("/api/category");
//     // }
//     getCategories(): Observable<Category[]> {
//         return of(CATEGORIES);
//     }
// }
