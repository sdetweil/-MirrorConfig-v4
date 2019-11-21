import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.page.html',
  styleUrls: ['./address-modal.page.scss'],
})
export class AddressModalPage implements OnInit {

  ngOnInit() {
  }
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
  			this.viewCtrl.dismiss({action: 'save', address:this.address});
  }

}
