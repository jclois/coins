import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes =[
  {path: 'coins', component: CoinsComponent}
];

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }
