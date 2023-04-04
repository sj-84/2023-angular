import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//import { Module1Module } from './module1/module1.module';

const routes: Routes = [
  {path:'lazy1', loadChildren:()=>import('./module1/module1.module').then(x=>x.Module1Module)}, //relative route
  //{path:'/home', component:AppComponent} //Invalid configuration of route '/home': path cannot start with a slash,
  {path:'home', component:AppComponent},
 /*  { path: '',   redirectTo: '/first-component', pathMatch: 'full' } */ //redirectTo is used for default route when there is a separate default route component, not app component
 //^ here it will not work
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation:'disabled', preloadingStrategy:PreloadAllModules})],  //initial navigation will stop the initial route navigation when the app is loading
  exports: [RouterModule]
})
export class AppRoutingModule { }
