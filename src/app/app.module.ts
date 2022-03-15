import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListFruitsComponent } from './list-fruits/list-fruits.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitService } from './fruit.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, ListFruitsComponent, FruitComponent],
  bootstrap: [AppComponent],
  providers: [FruitService]
})
export class AppModule {}
