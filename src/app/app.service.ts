import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  machine = {
    title: "Snacks <small>and</small> Drinks",
    product: new Array(60),
    amount: 8,
    insert: '',
    screen: {
      money: '1000000',
      code: ''
    },
    keys: new Array(10),
    fill: false,
    selected: {
      index: 0,
      amount: 8,
      value: 0
    },
    sales: 0
  }

  items = [
    { img: 'juice1.png', value: 1500, amount: 8 },
    { img: 'juice2.png', value: 2300, amount: 8 },
    { img: 'pack1.png', value: 1200, amount: 8 },
    { img: 'pack2.png', value: 1500, amount: 8 },
    { img: 'snack1.png', value: 1700, amount: 8 },
    { img: 'snack2.png', value: 2000, amount: 8 },
    { img: 'soda1.png', value: 2500, amount: 8 },
    { img: 'soda2.png', value: 2000, amount: 8 },
    { img: 'cookie1.png', value: 700, amount: 8 },
    { img: 'cookie2.png', value: 7000, amount: 8 },
  ];

  constructor() {
    for (let index = 0; index < this.machine.product.length; index++) {
      let position = Math.floor(Math.random() * this.items.length);
      this.machine.product[index] = {
        index: position,
        img: this.items[position].img,
        value: this.items[position].value,
        amount: this.items[position].amount
      }
    }
  }
}
