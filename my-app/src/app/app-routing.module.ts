import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RolunkComponent} from './rolunk/rolunk.component';
import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';


const routes: Routes = [
  //{ path: '', component: AppComponent},
  { path: 'rolunk', component: RolunkComponent  },
  { path: 'fooldal', component: FooldalComponent},
  { path: '', redirectTo: '/fooldal', pathMatch: 'full'},
  { path: 'kapcsolat', component: KapcsolatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
