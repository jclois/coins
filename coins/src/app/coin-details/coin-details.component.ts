import { Component, OnInit, Input } from '@angular/core';
import { Coin } from '../coins';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss']
})
export class CoinDetailsComponent implements OnInit {
  @Input() coin: Coin;

  constructor() { }

  ngOnInit(): void {
  }

}
