import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';
import { DataProvider } from '../services/data/data';

@Component({
  selector: 'app-viewer-modal',
  templateUrl: './viewer-modal.page.html',
  styleUrls: ['./viewer-modal.page.scss'],
})
export class ViewerModalPage implements OnInit {

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
  ngOnInit(){
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
