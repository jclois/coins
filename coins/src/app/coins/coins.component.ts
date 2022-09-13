import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  coin: Coin = { id: 1, name: 'American Angle'};

  constructor() { }

  ngOnInit(): void {
  }

}
