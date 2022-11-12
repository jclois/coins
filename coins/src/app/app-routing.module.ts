import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoinsComponent } from './coins/coins.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { ExtGoldApiComponent } from './ext-gold-api/ext-gold-api.component';
import { CoinWishlistComponent} from './coin-wishlist/coin-wishlist.component';

const routes: Routes =[
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'coins', component: CoinsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: CoinDetailsComponent},
  {path: 'ext-gold-api', component: ExtGoldApiComponent},
  {path: 'coin-wishlist', component: CoinWishlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
