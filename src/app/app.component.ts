import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'SnacksAndDrinks-Simulator';

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

  onChange(newValue: any): void {
    if (newValue) {
      setTimeout(() => {
        this.appService.machine.screen.money = (Number(newValue) + Number(this.appService.machine.screen.money)).toString();
        this.appService.machine.insert = '';
      }, 250);
    }
  }

  pressKey(key: any): void {
    if (key == 'OK') {
      let code = Number(this.appService.machine.screen.code);
      if (!this.appService.machine.fill) {
        // Buy products
        if (this.appService.machine.screen.money != '0') {
          if (this.appService.machine.screen.code) {
            if (code > 0 && code <= this.appService.machine.product.length) {
              this.getProduct(code);
            } else {
              this.appService.machine.screen.code = 'No valid';
              setTimeout(() => {
                this.appService.machine.screen.code = '';
              }, 500);
            }
          } else {
            this.appService.machine.screen.code = 'Insert code';
            setTimeout(() => {
              this.appService.machine.screen.code = '';
            }, 500);
          }
        } else {
          this.appService.machine.screen.money = 'No money';
          setTimeout(() => {
            this.appService.machine.screen.money = '0';
          }, 500);
        }
      } else {
        // Insert products
        let position = this.appService.machine.selected.index;
        if (position >= 0) {
          if (this.appService.machine.screen.code) {
            if (code > 0 && code <= this.appService.machine.product.length) {
              let item = this.appService.items[position];
              this.appService.machine.product[code - 1] = {
                index: position,
                img: item.img,
                value: item.value,
                amount: item.amount
              }
            } else {
              this.appService.machine.screen.code = 'No valid';
              setTimeout(() => {
                this.appService.machine.screen.code = '';
              }, 500);
            }
          } else {
            this.appService.machine.screen.code = 'Insert code';
            setTimeout(() => {
              this.appService.machine.screen.code = '';
            }, 500);
          }
        } else {
          this.appService.machine.screen.code = 'Select item';
          setTimeout(() => {
            this.appService.machine.screen.code = '';
          }, 500);
        }
      }
    } else if (key == 'X') {
      this.appService.machine.screen.code = '';
    } else {
      this.appService.machine.screen.code += key;
    }
  }

  returnMoney(): void {
    this.appService.machine.screen.money = '~ ~ ~';
    setTimeout(() => {
      this.appService.machine.screen.money = '0';
    }, 500);
  }

  fillMachine() {
    // const pin = prompt("Insert PIN to toggle fill machine:");
    // if (pin == '123') {
    this.appService.machine.fill = !this.appService.machine.fill;
    // } else {
    //   alert("PIN no valid.");
    // }
  }

  productPress(index: any) {
    this.appService.machine.screen.code = index + 1;
  }

  getProduct(code: number): void {
    if (this.appService.machine.product[code - 1].amount > 0) {
      let money = this.appService.machine.screen.money;
      if (Number(money) >= this.appService.machine.product[code - 1].value) {
        this.appService.machine.product[code - 1].amount--;
        this.appService.machine.screen.money = (Number(money) - this.appService.machine.product[code - 1].value).toString();
        this.appService.machine.sales += this.appService.machine.product[code - 1].value;
      } else {
        this.appService.machine.screen.code = 'No credit';
        setTimeout(() => {
          this.appService.machine.screen.code = code.toString();
        }, 500);
      }
    } else {
      this.appService.machine.screen.code = 'No stock';
      setTimeout(() => {
        this.appService.machine.screen.code = code.toString();
      }, 500);
    }
  }

}

