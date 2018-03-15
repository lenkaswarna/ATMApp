import { Component, OnInit, transition } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../card.service';
import { Cards } from '../cards';
import { Tranction } from '../tranction';


@Component({
    selector: 'app-amount',
    templateUrl: './amount.component.html'
})
export class AmountComponent implements OnInit {

    card: Cards[];
    tranctions:Tranction[];
    cards: Cards;
    note2000 = 0;
    note500 = 0;
    note100 = 0;
    note2kNotes = 10;
    note5hNotes = 10;
    note1hNotes = 10;
    temp = 0;
    amount1;

    ngOnInit() {
        this.getAmount();
    }

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private cardService: CardService
    ) {

    }
    //get amount from form
    submit(amount: number) {
        this.amount1 = amount;
        console.log(this.cards.balance);
        console.log(amount);
        if (this.amount1 > this.cards.balance && this.amount1 % 100 != 0) {
            console.log("amount is not correct");
        }
        if (this.amount1 >= 2000) {
            this.temp = Math.floor(this.amount1 / 2000);
            if (this.temp > 0 && this.temp <= this.note2kNotes) {
                this.note2000= this.temp;
                this.cards.balance = this.cards.balance - this.note2000 * 2000;
                this.amount1 = this.amount1 - this.note2000 * 2000;
            }
            this.temp = 0;
        }
        if (this.amount1 >= 500) {
            this.temp = Math.floor(this.amount1 / 500);
            if (this.temp > 0 && this.temp <= this.note5hNotes) {
                this.note500 = this.temp;
               this.cards.balance = this.cards.balance - this.note500  * 500;
                this.amount1 = this.amount1 - this.note500  * 500;
            }
            this.temp = 0;
        }
        if (this.amount1 >= 100) {
            this.temp = Math.floor(this.amount1 / 100);
            if (this.temp > 0 && this.temp <= this.note1hNotes) {
                this.note100  = this.temp;
                this.cards.balance = this.cards.balance - this.note100 * 100;
                this.amount1 = this.amount1 - this.note100 * 100;
            }
            this.temp = 0;
        }
        

    }

    //Get amount 
    getAmount() {
        const id = +this.route.snapshot.paramMap.get('id');
        console.log(id);
        this.cardService.getAmount(id)
            .subscribe(card => {
                console.log(card.balance);
                this.cards = card;
            });
    }
    //add debited amount to database
   /* addAmount(amount1: number): void {
        //name = name.trim();
        if (!amount1) { return; }
        this.cardService.addAmount({ amount1 } as )
          .subscribe(transition => {
            this.tranctions.push(transition);
          });
      }*/
}