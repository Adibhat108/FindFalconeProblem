import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindFalconeComponent } from './find-falcone/find-falcone.component';


const routes: Routes = [
  {
    path : '', component : FindFalconeComponent,
  },
//   {
//     path : 'falcone-result', component : FalconeFoundComponent
//   },
//   {
//     path : 'contact', component: ContactComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
