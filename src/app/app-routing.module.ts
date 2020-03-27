import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenupageComponent } from './menupage/menupage.component';


const routes: Routes = [
  {path: 'Menu', component: MenupageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
