import { Component, OnInit, Input } from '@angular/core';
import { Coin } from '../coins';
import { ActivatedRoute} from '@angular/router';
import { Location} from "@angular/common";
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss']
})
export class CoinDetailsComponent implements OnInit {
  coin: Coin;

  constructor(private route: ActivatedRoute, private coinService: CoinService, private location: Location) { }

  ngOnInit(): void {
    this.getCoin();
  }

getCoin(): void {
  const id = +this.route.snapshot.paramMap.get('id')!.valueOf;

  this.coinService.getCoin(id).subscribe(coin => this.coin = coin);
}

}
