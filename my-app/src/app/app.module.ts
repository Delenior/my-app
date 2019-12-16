import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { HeaderListComponent } from './header-list/header-list.component';
import { FooterComponent } from './footer/footer.component';
import { KapcsolatService } from './kapcsolat.service';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    RolunkComponent,
    FooldalComponent,
    KapcsolatComponent,
    HeaderListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    KapcsolatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
