import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import {FormsModule} from "@angular/forms";
import { PowerHumanComponent } from './power/power-human/power-human.component';
import { PowerSaiyanComponent } from './power/power-saiyan/power-saiyan.component';
import { PowerSuperSaiyanComponent } from './power/power-super-saiyan/power-super-saiyan.component';
import { PowerSuperSaiyanTwoComponent } from './power/power-super-saiyan-two/power-super-saiyan-two.component';
import { PowerSuperSaiyanThreeComponent } from './power/power-super-saiyan-three/power-super-saiyan-three.component';
import { PowerSuperSaiyanFourComponent } from './power/power-super-saiyan-four/power-super-saiyan-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    PowerHumanComponent,
    PowerSaiyanComponent,
    PowerSuperSaiyanComponent,
    PowerSuperSaiyanTwoComponent,
    PowerSuperSaiyanThreeComponent,
    PowerSuperSaiyanFourComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
