import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { Cards } from './cards';
import { Tranction } from './tranction';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable()
export class CardService{

    private Cardurl='api/cards';
    private Debiturl='api/debit';


    constructor(
        private http: HttpClient
    ){

    }

/** GET Card data from the server */
getCards (): Observable<Cards[]> {
    return this.http.get<Cards[]>(this.Cardurl)
      .pipe(
       tap(heroes => console.log('data fetched')),
        catchError(this.handleError('getCards', []))
      );
  }


    /** GET card by id. Will 404 if id not found */
  getAmount(id: number): Observable<Cards> {
    const url = `${this.Cardurl}/${id}`;
    return this.http.get<Cards>(url).pipe(
      tap(_ => console.log(`Amount fetched`)),
      catchError(this.handleError<Cards>(`getHero id=${id}`))
    );
  }

  //add debited amount
  addAmount (tranction: Tranction): Observable<Tranction> {
    return this.http.post<Tranction>(this.Debiturl, tranction, httpOptions).pipe(
      tap((tranction: Tranction) => console.log('amount debited')),
      catchError(this.handleError<Tranction>('addHero'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
    //  this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}