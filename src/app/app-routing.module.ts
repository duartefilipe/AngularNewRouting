import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina01Component } from './pagina01/pagina01.component';
import { Pagina02Component } from './pagina02/pagina02.component';


const routes: Routes = [
  {path: 'pagina01', component: Pagina01Component},
  {path: 'pagina02', component: Pagina02Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
