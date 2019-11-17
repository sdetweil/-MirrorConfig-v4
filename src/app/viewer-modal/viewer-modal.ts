import { Component } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';
import { DataProvider } from '../services/data/data';
/**
 * Generated class for the ViewerModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-viewer-modal',
  templateUrl: 'viewer-modal.html'

})
export class ViewerModalPage {
  thisviewer: any;
  modaltype: any;
  constructor(//public navCtrl: NavController, 
  							public navParams: NavParams,
  							public viewCtrl: ModalController,
  							private data:DataProvider
  							) {
    this.modaltype=navParams.get("type");
    this.thisviewer=navParams.get("object");
  }

	closeModal() {
		this.viewCtrl.dismiss();
	}
	saveModal()
	{		
		this.viewCtrl.dismiss({type:'viewer',data:this.thisviewer});
	}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewerModalPage');
  }
  checkSelectedTag(tag1, tag2){
  	return tag1==tag2;
  }

}
