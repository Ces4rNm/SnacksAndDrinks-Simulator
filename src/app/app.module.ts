import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FillMachineComponent } from './components/fill-machine/fill-machine.component';
import { FormsModule } from '@angular/forms';
import { MoneyPipe } from './app.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FillMachineComponent,
    MoneyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
