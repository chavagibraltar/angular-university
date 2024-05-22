import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/model/user.model';
// import { Lecturer } from 'src/model/lecturer.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    USERS: User[] = [];
    private apiUrl = 'http://localhost:5207/api';
    constructor(private _http: HttpClient) { }
    //users
    getUsers(): Observable<User[]> {
        const url = `${this.apiUrl}/User`;
        console.log("getUsers - service");
        return this._http.get<User[]>(url);
    }
    addUser(user: User | null): Observable<boolean> {
        const url = `${this.apiUrl}/User`;
        if (user)
            return this._http.post<boolean>(url, user);//לשאול בפונקציה השולחת האם התקבל NULL , אם כן אז יש לבחור שם אחר
        else
            return of(false);
    }

    //lecturers
    getLecturers(): Observable<User[]> {
        const url = `${this.apiUrl}/Lecturer`;
        return this._http.get<User[]>(url);
    }
    addLecturer(user: User): Observable<User> {
        const url = `${this.apiUrl}/Lecturer`;
        return this._http.post<User>(url, user);//לשאול בפונקציה השולחת האם התקבל NULL , אם כן אז יש לבחור שם אחר
    }
    getLecturerById(id: number): Observable<User> {
        const url = `${this.apiUrl}/Lecturer/${id}`;
        return this._http.get<User>(url);
    }
}

































    // getUsersFromServer(): Observable<User[]> {
    //     return this._http.get<User[]>("/api/User");
    // }
    // addUserToServer(user: User | null): Observable<boolean> {//אולי אובד - אבל אין צורך ---------------------------------------------------------------------------
    //     if (user) {
    //         return this._http.post<boolean>("/api/User", user);
    //     } else {
    //         // אם המשתנה user הוא null, נחזיר Observable שמכיל ערך false
    //         return of(false);
    //     }
    // }

    //mine---------------------------------------------------------------------------------------

    // APP_USERS: User[] = [
    //     {
    //         id: 1,
    //         name: "Sara Cohen",
    //         address: "Jerusalem",
    //         email: "sara31314@gmail.com",
    //         password: "1***",
    //         isLecturer: false
    //     },
    //     {
    //         id: 2,
    //         name: "Mina Levi",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "2***",
    //         isLecturer: false
    //     },
    //     {
    //         id: 3,
    //         name: "Yael Frid",
    //         address: "Bney Brak",
    //         email: "yael5994@gmail.com",
    //         password: "3***",
    //         isLecturer: false
    //     },
    //     {
    //         id: 4,
    //         name: "Chana Lev",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "4***",
    //         isLecturer: false
    //     },
    //     {
    //         id: 5,
    //         name: "Shiri meir",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "5***",
    //         isLecturer: false
    //     },
    //     {
    //         id: 6,
    //         name: "Nechane Israeli",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "6***",
    //         isLecturer: false
    //     },
    //     {
    //         id: 7,
    //         name: "Riki Shtern",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "7***",
    //         isLecturer: false
    //     },
    //     {
    //         id: 8,
    //         name: "Ruth Kofman",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "8***",
    //         isLecturer: false
    //     },
    //     {
    //         id: 9,
    //         name: "Suri Rozen",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "9***",
    //         isLecturer: false
    //     },
    //     {
    //         id: 10,
    //         name: "Leah Ben-Dov",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "10**",
    //         isLecturer: false
    //     },
    //     {
    //         id: 11,
    //         name: "Miriyam Rot",
    //         address: "Petach Tikva",
    //         email: "mina0254@gmail.com",
    //         password: "11**",
    //         isLecturer: false
    //     }
    // ];