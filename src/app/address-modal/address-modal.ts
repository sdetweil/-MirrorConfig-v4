import { Component } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';

/**
 * Generated class for the AddressModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-address-modal',
  templateUrl: 'address-modal.html',
})
export class AddressModalPage {
  address: string='';
  constructor(//public navCtrl: NavController, 
  						  public navParams:   NavParams,
  						  public viewCtrl: ModalController) {
  						  
  						  var x = navParams.get("address")
							console.log("previously saved address is ="+x);
  						  	this.address=(x !=undefined)?x.toString():'';  						  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressModalPage');
  }
  itemSelected(parm)
  {
  		if(parm=='cancel') 
  			this.viewCtrl.dismiss();
  		else if(parm=='delete') 
  			this.viewCtrl.dismiss({action:'delete'});
  		else
  			this.viewCtrl.dismiss({address:this.address});
  }

}
