import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RolunkComponent} from './rolunk/rolunk.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { PrimengFormComponent } from './primeng-form/primeng-form.component';


const routes: Routes = [
  //{ path: '', component: AppComponent},
  { path: 'rolunk', component: RolunkComponent  },
  { path: 'fooldal', component: FooldalComponent},
  { path: '', redirectTo: '/fooldal', pathMatch: 'full'},
  { path: 'kapcsolat', component: KapcsolatComponent},
  { path: 'primengForm', component: PrimengFormComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
