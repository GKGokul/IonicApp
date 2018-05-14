import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// This is the login page.

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    
    @ViewChild('uname') uname;
    @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  LoginNow(){
      if( this.uname.value == "sudo" && this.password.value == "odus"){
		  this.successAlert();
		  this.navCtrl.push(ContactPage);
	  }
	  else{
		  this.failAlert();
	  }
  }

  successAlert() {
    let alert = this.alertCtrl.create({
        title: 'Login Success',
        subTitle: 'Go Ahead and Enjoy',
        buttons: ['OK']
    });
    alert.present();
  }

  failAlert() {
    let alert = this.alertCtrl.create({
        title: 'Login Failed',
        subTitle: 'Incorrect Credentials',
        buttons: ['OK']
    });
    alert.present();
  }


}
