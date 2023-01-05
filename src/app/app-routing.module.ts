import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
//import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  //{ path: '',component: ReactiveFormsComponent, pathMatch: 'full' }
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'sobre', component: SobreComponent, children: [
    { path: 'empresa', component: SobreComponent },
    { path: 'pessoas', component: SobreComponent },
  ]},
  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
