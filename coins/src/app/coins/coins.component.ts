import { Component, OnInit } from '@angular/core';
import { Coin } from '../coins';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  coin = Coin;

  constructor() { }

  ngOnInit(): void {
  }

}
