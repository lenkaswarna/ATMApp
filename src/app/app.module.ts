import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import {CardService} from './card.service';
import { AppRoutingModule } from './/app-routing.module';
import {AmountComponent} from './amount/amount.component';
import {CardComponent} from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,AmountComponent,CardComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
