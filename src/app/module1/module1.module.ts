import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Comp2Component } from './mod1-comp2/mod1-comp2.component';
import { Mod1CompComponent } from '../mod1-comp/mod1-comp.component';
import { Route, RouterModule, Routes } from '@angular/router';

//module not created with routing in mind but no problem, we can create routes within feature module itself

const routes:Routes=[{
  path:'', component:Mod1CompComponent
}]

@NgModule({
  declarations: [
    Mod1Comp2Component, //created with command Module_name/Comp_name
    Mod1CompComponent, //even though folder structure is different then also the component is within this module - created with the command of normal component creation

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) //routes can be integrated inside feature module also
  ]
})
export class Module1Module { }
