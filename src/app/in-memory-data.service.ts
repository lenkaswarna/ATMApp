import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cards = [
      { id: 1, card_number: 1214,pin:3453,balance:4000 },
      { id: 2, card_number: 1215,pin:4534,balance:2000 },
      { id: 3, card_number: 1216,pin:5535,balance:6000 },
      { id: 4, card_number: 1217,pin:6536,balance:1500 }
    ];
    const tranction=[

    ]
    return {cards,tranction};
  }
 
}
