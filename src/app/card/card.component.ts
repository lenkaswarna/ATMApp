import { Component,OnInit } from '@angular/core';
import { CardService } from '../card.service';
import {Cards} from '../cards';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html'
   // styleUrls: ['./card.component.css']
  })
  export class CardComponent implements OnInit {
   
   cards: Cards[];
   //console.log(card);
  constructor(
    private cardService: CardService,
    private router: Router
  ){
  
  }
  
  ngOnInit(){
    this.getCards();
  }
  
  getCards(): void {
    this.cardService.getCards()
    .subscribe(cards => {
      this.cards = cards;
      console.log(cards);
    });
  }
  
  //get card data
  /*getCard(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.cardService.getCard(id)
      .subscribe(hero => this.hero = hero);
  }*/
  
  
   submit(card_number: number,pin: number){
     this.cards.forEach((card) => {
       if(card.card_number == card_number && card.pin == pin) {
         console.log('card matched');
         //console.log(this.cards.id);
         this.router.navigate([`/amount/${card.id}`]);
       }
       else{
         console.log('data is not correct');
       }
     });
   }
  }
  