import { NgModule }             from '@angular/core';
import { AmountComponent} from './amount/amount.component';
import { RouterModule, Routes } from '@angular/router';
import {  CardComponent} from './card/card.component';

const routes: Routes = [
  { path: '', redirectTo:'/card', pathMatch: 'full' },
  { path: 'amount/:id', component: AmountComponent },
  { path: 'card', component: CardComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}