import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "@login/components/login/login.component";
import { AuthGuard } from '@core/guard/auth.guard';




const routes: Routes = [

  { path: '' , redirectTo: "/auto",pathMatch: 'full'},
  { path: 'login'  , component: LoginComponent },  
  { path: 'auto', loadChildren: () => import('@auto/auto.module').then(mod => mod.AutoModule), canActivate: [ AuthGuard ], canActivateChild: [AuthGuard]},
  { path: 'rentar-auto', loadChildren: () => import('@rentar-auto/rentar-auto.module').then(mod => mod.RentarAutoModule), canActivate: [ AuthGuard ] },
  { path: 'usuarios', loadChildren: () => import('@usuarios/usuarios.module').then(mod => mod.UsuariosModule), canActivate: [ AuthGuard ] }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
