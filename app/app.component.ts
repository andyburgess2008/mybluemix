import { Component } from '@angular/core';


import {Router} from '@angular/router';
//import {contactcomponent} from './contact.component';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
  <!--<h2>Hero: {{message}}</h2>-->
  <hero-form></hero-form>
  `
})
export class AppComponent { 
  message:string="Login";
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}
