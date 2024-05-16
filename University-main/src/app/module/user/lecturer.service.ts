import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { Lecturer } from 'src/model/lecturer.model';

@Injectable({
    providedIn: 'root'
})
export class LecturerService {
    private apiUrl = 'https://your-api-url/lecturers';
    // APP_LECTURER: Lecturer[] = [
    //     {
    //         id: 1,
    //         name: "Sara Cohen",
    //         address: "Jerusalem",
    //         email: "sara31314@gmail.com",
    //         password: "1***",
    //         // isLecturer:true
    //     },
    //     {
    //         id: 2,
    //         name: "Mina Levi",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "2***",
    //         // isLecturer:true
    //     },
    //     {
    //         id: 3,
    //         name: "Yael Frid",
    //         address: "Bney Brak",
    //         email: "yael5994@gmail.com",
    //         password: "3***",
    //         // isLecturer:true
    //     },
    //     {
    //         id: 4,
    //         name: "Chana Lev",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "4***",
    //         // isLecturer:true
    //     },
    //     {
    //         id: 5,
    //         name: "Shiri meir",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "5***",
    //         // isLecturer:true
    //     },
    //     {
    //         id: 6,
    //         name: "Nechane Israeli",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "6***",
    //         // isLecturer:true
    //     },
    //     {
    //         id: 7,
    //         name: "Riki Shtern",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "7***",
    //         // isLecturer:true
    //     },
    //     {
    //         id: 8,
    //         name: "Ruth Kofman",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "8***",
    //         // isLecturer:true
    //     },
    //     {
    //         id: 9,
    //         name: "Suri Rozen",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "9***",
    //         // isLecturer:true
    //     },
    //     {
    //         id: 10,
    //         name: "Leah Ben-Dov",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "10**",
    //         // isLecturer:true
    //     },
    //     {
    //         id: 11,
    //         name: "Miriyam Rot",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "11**",
    //         // isLecturer:true
    //     }
    // ];

    // constructor(private http: HttpClient) { }

    // // getLecturers(): Observable<Lecturer[]> {
    // //     return this.http.get<Lecturer[]>(this.apiUrl);
    // // }
    // getLecturers(): Observable<Lecturer[]> {
    //     return of(this.APP_LECTURER);
    // }

    // // getLecturerById(id: number): Observable<Lecturer> {
    // //     const url = `${this.apiUrl}/${id}`;
    // //     return this.http.get<Lecturer>(url);
    // // }
    // getLecturerById(id: number): Observable<Lecturer> {
    //     return of(this.APP_LECTURER.find(l => l.id == id));
    // }

    // // createLecturer(lecturer: Lecturer): Observable<Lecturer> {
    // //     return this.http.post<Lecturer>(this.apiUrl, lecturer);
    // // }
    // createLecturer(lecturer: Lecturer): Observable<Lecturer> {
    //     let id = lecturer.id;
    //     this.APP_LECTURER.push(lecturer)
    //     return of(this.APP_LECTURER.find(l => l.id == id));
    // }

    // updateLecturer(lecturer: Lecturer): Observable<Lecturer> {
    //     const url = `${this.apiUrl}/${lecturer.id}`;
    //     return this.http.put<Lecturer>(url, lecturer);
    // }

    // deleteLecturer(id: number): Observable<void> {
    //     const url = `${this.apiUrl}/${id}`;
    //     return this.http.delete<void>(url);
    // }
}
