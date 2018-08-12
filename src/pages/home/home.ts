import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.menu.enable(true);
    this.menu.swipeEnable(true);
  }

}
