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
import { FormsModule } from '@angular/forms';
import { PrimengFormComponent } from './primeng-form/primeng-form.component'
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButton} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import { Button } from 'protractor';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    AppComponent,
    RolunkComponent,
    FooldalComponent,
    KapcsolatComponent,
    HeaderListComponent,
    FooterComponent,
    PrimengFormComponent,
    RadioButton,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    CheckboxModule,
    ButtonModule,
    PasswordModule,
  ],
  providers: [
    KapcsolatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
