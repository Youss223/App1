import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentNameComponent } from './component-name/component-name.component';
import { FirstComponent } from './compoment/first/first.component';
import { SecondComponent } from './compoment/second/second.component';
import { ColorComponent } from './compoment/color/color.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    ListComponent,
    ItemComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
