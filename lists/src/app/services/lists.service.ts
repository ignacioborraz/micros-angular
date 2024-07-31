import { Injectable, signal } from '@angular/core';
import { List } from '../interfaces/list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  private apiUrl = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) {}

  create(data: List): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token,
    });
    return this.http.post<any>(`${this.apiUrl}/lists`, data, { headers });
  }

  readAll(board_id: string): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token,
    });
    return this.http.get<any>(`${this.apiUrl}/lists?board_id=${board_id}`, {
      headers,
    });
  }

  private reload = signal<boolean>(true);

  setReload() {
    this.reload.update((value) => !value);
  }
  getReload() {
    return this.reload;
  }
}
