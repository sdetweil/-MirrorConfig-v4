import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';
import { DataProvider } from '../services/data/data';
import {NgZone} from '@angular/core';

@Component({
  selector: 'app-datasource-modal',
  templateUrl: './datasource-modal.page.html',
  styleUrls: ['./datasource-modal.page.scss'],
})
export class DatasourceModalPage implements OnInit {

  ngOnInit() {
  }

  thisdatasource: any;
  modaltype: any;
  parentobject:any;
  saveobject: any;
  modal: any;

  constructor(  public navParams: NavParams,
  						  private data: DataProvider,
   						  public modalCtrl: ModalController,
  						  private zone: NgZone) {

    this.modaltype=navParams.get("type");
    this.thisdatasource=navParams.get("object");
    this.parentobject=navParams.get("parent");
    this.saveobject={};
    this.modal={};

    }

	closeModal() {
		this.modalCtrl.dismiss();
	}
	saveModal()
	{
		this.modalCtrl.dismiss({type:'datasource',data:this.thisdatasource}/* some data, thisdatasource has been updated*/);
	}
 /* ionViewDidLoad() {
    console.log('ionViewDidLoad DatasouceModalPage');
  } */
  checkSelectedSource(tag1, tag2){
  	return tag1==tag2;
  }
  async doubleClick(object, opendialog){
  			console.log("in datasource doubleclick");

			if(opendialog)
			{
				this.saveobject['file']=null;
				var modal=await this.modalCtrl.create( { component:'FileModalPage', componentProps:{type:this.modaltype,object:object,dialog_title:"Datasource: select folder"}});
				
				console.log("file modal created");
				
				var updatedObject= await modal;
			 		 // Do things with data coming from modal, for instance :
			 		 if(updatedObject != undefined)
			 		 {
				 		 console.log("return from dialog type="+updatedObject['type']+" data="+JSON.stringify(updatedObject['data'])+" path="+updatedObject['path']);
				 		 		if(updatedObject['path'].endsWith('*'))
				 		 		   updatedObject['path']=updatedObject['path'].substring(0,updatedObject['path'].length-1);
				 		 		updatedObject['data'].Root=updatedObject['path'];
				 		 		var self=this;
				 		 		this.zone.run(() =>{
				 		 		  self.thisdatasource=updatedObject['data'];
				 		 		})
				 	 }
				 	 else
				 	   console.log ("return from dialog, no data")
				console.log("file modal opening");
				//await modal.present();	
				console.log("file modal open");
			}				
  }

}
