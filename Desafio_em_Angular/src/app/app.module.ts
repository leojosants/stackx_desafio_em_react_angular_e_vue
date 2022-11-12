import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListButtonComponent } from './components/list-button/list-button.component';
import { ListTechsComponent } from './components/list-techs/list-techs.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListButtonComponent,
    ListTechsComponent,
    MainComponent,
  ],

  imports: [
    BrowserModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
