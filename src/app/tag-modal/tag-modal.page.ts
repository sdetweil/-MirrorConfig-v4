import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../services/data/data';
import {ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tag-modal',
  templateUrl: './tag-modal.page.html',
  styleUrls: ['./tag-modal.page.scss'],
})
export class TagModalPage implements OnInit {

  ngOnInit() {
    console.log('ionViewDidLoad TagModalPage OnInit');
  }

  //d: any;
  thistag: any;
  modaltype: any;
  constructor(//public navCtrl: NavController, 
  						public navParams: NavParams, 
  						private data: DataProvider,
  						public modalCtrl: ModalController) {
    //this.d=data;
    this.modaltype=navParams.get("type");
    this.thistag=navParams.get("object");
    }

	closeModal() {
		this.modalCtrl.dismiss();
	}
	saveModal()
	{
		this.modalCtrl.dismiss({type:'tag',data:this.thistag}/* some data, thistag has been updated*/);
	}

 
}
