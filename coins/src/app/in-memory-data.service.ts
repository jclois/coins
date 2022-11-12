import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Coin } from './coins';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const coins = [
      { id: 12, type: 'Silver', name: 'American Eagle', year: '2018', price: '11', country: 'USA', quantity: '55' },
      { id: 13, type: 'Gold', name: 'American Eagle', year: '2022', price: '1700', country: 'USA', quantity: '5' },
      { id: 14, type: 'Silver', name: 'Mapple Leaf', year: '2017', price: '8', country: 'CANADA', quantity: '15'},
      { id: 15, type: 'Silver', name: 'Australian Kangaroo', year: '2018', price: '13', country: 'AUS', quantity: '25'},
      { id: 16, type: 'Silver', name: 'Krugger', year: '2019', price: '15', country: 'SA', quantity: '25' },
      { id: 17, type: 'Silver', name: 'Buffalo', year: '2021', price: '19', country: 'USA', quantity: '65' },
      { id: 18, type: 'Silver', name: 'Scottsdale Archangel', year: '2019', price: '12', country: 'UK', quantity: '5' },
      { id: 19, type: 'Gold', name: 'Mapple Leaf', year: '2018', price: '1600', country: 'CANADA', quantity: '2' },
      { id: 20, type: 'Silver', name: 'Silver Towne', year: '2017', price: '9', country: 'USA', quantity: '45' }
    ];
    return {coins};
  }

  // Overrides the genId method to ensure that a coin always has an id.
  // If the coins array is empty,
  // the method below returns the initial number (11).
  // if the coins array is not empty, the method below returns the highest
  // coin id + 1.
  genId(coins: Coin[]): number {
    return coins.length > 0 ? Math.max(...coins.map(coin => coin.id)) + 1 : 11;
  }
}