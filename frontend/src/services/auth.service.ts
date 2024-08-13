import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any): Observable<any> {
    console.log('Registering user:', user); 
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }, { headers }).pipe(
      tap(response => {
        if (response.access_token) {
          console.log('Login successful, token:', response.access_token); // Log the token for debugging
          localStorage.setItem('token', response.access_token);
          this.router.navigate(['/admin-dashboard']);
        }
      }),
      catchError(error => {
        console.error('Login error', error);
        return throwError(error);
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): Observable<any> {
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post<any>(`${this.apiUrl}/logout`, {}, { headers }).pipe(
        tap(() => {
          console.log('Logged out successfully'); // Log successful logout
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }),
        catchError(error => {
          console.error('Logout error', error);
          return throwError(error);
        })
      );
    } else {
      console.error('No token found');
      return throwError('No token found');
    }
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    console.log('Retrieved token:', token); // Log the retrieved token for debugging
    return token;
  }
}
