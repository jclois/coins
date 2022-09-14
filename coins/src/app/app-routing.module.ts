import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { CoinsComponent } from './coins/coins.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =[
  [path: ''], redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'coins', component: CoinsComponent}
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
