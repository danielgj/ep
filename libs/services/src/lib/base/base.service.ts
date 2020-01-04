import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class BaseService {
    baseUrl: string;

    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
            },
        ),
    }

    constructor(public http: HttpClient) {
    }

    setBaseUrl(apiUrl: string) {
        this.baseUrl = apiUrl;
    }


    /**
     * Handle Http operation that failed.
     * Log error.
     * Throw appropiate exception
     * @param operation - name of the operation that failed
     * @param endpoint - optional value to track http endpoint
     */
    handleError<T>(operation = 'operation', endpoint?: string) {
        return (error: HttpErrorResponse): Observable<T> => {
            throw {
                summary: `Error in ${operation}`,
                description: error.error.message
            };
        };
    }
}
