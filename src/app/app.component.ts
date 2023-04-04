import { Component, isDevMode, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'App';
  changedVar = 'Next commit val'

constructor(private _router:Router){}

  ngOnInit(){
    alert('Value of environment var-'+environment.production)
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
    console.log(window.performance) //when the app is reloaded then ngOnInit is triggered and we can fetch the performance value from here
    if(window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD){ //reload tracking is working 
      /* this._router.navigate(['home']); */ //will not work since it is showing two times app component
      this._router.navigate(['']); //empty path will erase the old path and will come back to default state - that means app component
    }
  }

  //---------------------ROUTING TASKS-----------------------

  navigate()
  {
    //this._router.navigate(['/lazy1']); //can give absolute/relative route here not in route defination
    this._router.navigate(['lazy1']);
  }
}
