import { AuthProvider } from './../../providers/auth/auth';
import { HomePage } from './../home/home';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, ToastController, AlertController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentialsForm: any;

  constructor(
    public nav: NavController, 
    public alertCtrl: AlertController, 
    public menu: MenuController, 
    public toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    public auth: AuthProvider
  ) {
    this.menu.enable(false);

    this.credentialsForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    let data = this.credentialsForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    }

    this.auth.signInWithEmail(credentials)
    .then(
      () => this.nav.setRoot(HomePage),
      (error) => {
        let alert = this.alertCtrl.create({
          title: 'Lỗi',
          message: error.message,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }

  forgotPass() {
    let forgot = this.alertCtrl.create({
      title: 'Quên mật khẩu?',
      message: "Điền email để của bạn",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Hủy',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Gửi',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Đã gửi email thành công',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
