import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Coin } from '../coins';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coin-search',
  templateUrl: './coin-search.component.html',
  styleUrls: [ './coin-search.component.scss' ]
})
export class CoinSearchComponent implements OnInit {
  coins$!: Observable<Coin[]>;
  private searchTerms = new Subject<string>();

  constructor(private coinService: CoinService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.coins$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.coinService.searchCoins(term)),
    );
  }
}