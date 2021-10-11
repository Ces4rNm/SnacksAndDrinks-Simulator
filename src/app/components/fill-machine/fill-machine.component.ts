import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-fill-machine',
  templateUrl: './fill-machine.component.html',
  styleUrls: ['./fill-machine.component.scss']
})
export class FillMachineComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    let item = this.appService.items[0];
    this.appService.machine.selected.index = 0;
    this.appService.machine.selected.amount = item.amount;
    this.appService.machine.selected.value = item.value;
  }

  select(index: number, item: any): void {
    this.appService.machine.selected.index = index;
    this.appService.machine.selected.amount = item.amount;
    this.appService.machine.selected.value = item.value;
  }

  onChange(newValue: any, type: string): void {
    switch (type) {
      case 'value':
        if (Number(newValue) > 0) {
          this.appService.items[this.appService.machine.selected.index].value = newValue;
        } else {
          this.appService.machine.selected.value = 100;
        }
        break;
      case 'amount':
        if (Number(newValue) > 0 && Number(newValue) <= 8) {
          this.appService.items[this.appService.machine.selected.index].amount = newValue;
        } else {
          this.appService.machine.selected.amount = 8;
        }
        break;
      default:
        break;
    }
  }

}
