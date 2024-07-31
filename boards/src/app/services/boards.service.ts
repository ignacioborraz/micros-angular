import { Injectable, signal } from '@angular/core';
import { Board } from '../interfaces/board';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  create(data: Board): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token,
    });
    return this.http.post<any>(`${this.apiUrl}/boards`, data, { headers });
  }

  readAll(): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token,
    });
    return this.http.get<any>(`${this.apiUrl}/boards`, { headers });
  }

  private reload = signal(true);

  getReload() {
    return this.reload;
  }

  setReload() {
    this.reload.update((val) => !val);
  }
}
