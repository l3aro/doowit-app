import { AuthProvider } from './../../providers/auth/auth';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'register'
})
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  credentialsForm: any;

  constructor(public nav: NavController, public formBuilder: FormBuilder, public auth: AuthProvider) {
    this.credentialsForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    });
  }


  // register and go to home page
  register() {
    let data = this.credentialsForm.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			() => this.nav.setRoot('HomePage'),
			(error) => {
        console.log(error.message);
        
      }
		);
  }

  // go to login page
  login() {
    this.nav.setRoot('LoginPage');
  }

}
