import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// This is the page where you add the contacts to the phone.

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

    @ViewChild('firstname') fname;
    @ViewChild('midname') mname;
    @ViewChild('lastname') lname;
    @ViewChild('mobile') mobile;
    @ViewChild('work') work;


  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }


  AddToContacts(){

    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, this.lname.value, this.fname.value, this.mname.value);
    contact.phoneNumbers = [new ContactField('mobile',this.mobile.value),new ContactField('work',this.work.value)];
    contact.save().then(
      () => this.successAlert(),
      (error: any) => this.failAlert()
    );

    this.nullator();
  }

  successAlert() {
    let alert = this.alertCtrl.create({
        title: 'Added to Contacts',
        buttons: ['OK']
    });
    alert.present();
  }

  failAlert() {
    let alert = this.alertCtrl.create({
        title: 'Error. Couldn\'t add to contacts',
        buttons: ['OK']
    });
    alert.present();
  }

  nullator(){
    this.fname.value = null;
    this.mname.value = null;
    this.lname.value = null;
    this.mobile.value = null;
    this.work.value = null;
  }

}
