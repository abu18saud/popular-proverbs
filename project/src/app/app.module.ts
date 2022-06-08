import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Toolbar1Component } from './theme/components/toolbar1/toolbar1.component';


// import { Toolbar1Component } from './theme/components/toolbar1/toolbar1.component';
// import { Toolbar2Component } from './theme/components/toolbar2/toolbar2.component';
// import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
// import { CurrencyComponent } from './theme/components/currency/currency.component';
// import { LangComponent } from './theme/components/lang/lang.component';
// import { SocialIconsComponent } from './theme/components/social-icons/social-icons.component';
// import { ContactsComponent } from './theme/components/contacts/contacts.component'; 
// import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
// import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
// import { FooterComponent } from './theme/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    Toolbar1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
