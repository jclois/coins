import { Injectable } from '@angular/core';
import { Coin } from './coins';
import { COINS } from './mock-coins';
import { Observable, of } from 'rxjs';
import { MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private coinsUrl = 'api/coins';  // URL to web api

  //getCoins(): Observable<Coin[]> {
  //  this.messageService.add(`CoinService: Fetched Coins`);
  //  return of(COINS);
  // }

  /** GET coins from the server */
  getCoins(): Observable<Coin[]> {
  return this.http.get<Coin[]>(this.coinsUrl)
  .pipe(
    tap(_ => this.log('fetched coins')),
    catchError(this.handleError<Coin[]>('getCoins', []))
  );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** PUT: update the coin on the server */
  updateCoin(coin: Coin): Observable<any> {
  return this.http.put(this.coinsUrl, coin, this.httpOptions).pipe(
    tap(_ => this.log(`updated coin id=${coin.id}`)),
    catchError(this.handleError<any>('updateCoin'))
    );
  }

  /*getCoin(id: number): Observable<Coin> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const coin = COINS.find(h => h.id === id)!;
    this.messageService.add(`CoinService: fetched coin id=${id}`);
    return of(coin);
  }*/

  /** GET coin by id. Will 404 if id not found */
  getCoin(id: number): Observable<Coin> {
  const url = `${this.coinsUrl}/${id}`;
  return this.http.get<Coin>(url).pipe(
    tap(_ => this.log(`fetched coin id=${id}`)),
    catchError(this.handleError<Coin>(`getCoin id=${id}`))
  );
}

  /** Log a CoinService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`CoinService: ${message}`);
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/** POST: add a new coin to the server */
addCoin(coin: Coin): Observable<Coin> {
  return this.http.post<Coin>(this.coinsUrl, coin, this.httpOptions).pipe(
    tap((newCoin: Coin) => this.log(`added coin w/ id=${newCoin.id}`)),
    catchError(this.handleError<Coin>('addCoin'))
  );
}

/** DELETE: delete the coin from the server */
deleteCoin(id: number): Observable<Coin> {
  const url = `${this.coinsUrl}/${id}`;

  return this.http.delete<Coin>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted coin id=${id}`)),
    catchError(this.handleError<Coin>('deleteCoin'))
  );
}

}
