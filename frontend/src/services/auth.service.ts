import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'; // Adjust if your API endpoint is different

  constructor(private http: HttpClient, private router: Router) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      tap(() => console.log('User registered successfully')),
      catchError(this.handleError)
    );
  }

  login(username: string, password: string): Observable<any> { 
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        const token = response.token; 
        if (token) {
          localStorage.setItem('token', token);
          console.log('Login successful, token:', token);
          this.router.navigate(['/admin-dashboard']); // Or your desired route
        }
      }),
      catchError(this.handleError)
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post<any>(`${this.apiUrl}/logout`, {}, { headers }).pipe(
        tap(() => {
          console.log('Logged out successfully');
          localStorage.removeItem('token');
          this.router.navigate(['/login']); // Or your desired route
        }),
        catchError(this.handleError)
      );
    } else {
      console.error('No token found for logout');
      return throwError('No token found'); 
    }
  }

  getUserId(): string | null { 
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode the token payload
        return decodedToken.user_id; // Assuming your token payload has a 'user_id' property
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    } else {
      return null;
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      if (error.status === 401) {
        errorMessage = 'Unauthorized. Please check your credentials.';
      } else if (error.status === 0) {
        errorMessage = 'Could not connect to the server. Please check your network connection.';
      } 
    }
    return throwError(errorMessage);
  }
}