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
  FileModalPage:any;

  constructor(  public navParams: NavParams,
  						  private data: DataProvider,
   						  public modalCtrl: ModalController,
  						  private zone: NgZone) {

    this.modaltype=navParams.get("type");
    this.thisdatasource=navParams.get("object");
    this.parentobject=navParams.get("parent");
    this.FileModalPage=navParams.get("filedlg");
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
				let modal=await this.modalCtrl.create( { component:this.FileModalPage, componentProps:{type:this.modaltype,object:object,dialog_title:"Datasource: select folder"}});
				console.log("file modal opening");
		    await modal.present();					
				console.log("file modal created");
				
				 let updatedObject= await modal.onDidDismiss();
			 		 // Do things with data coming from modal, for instance :
			 		 if(updatedObject != undefined && updatedObject.data != undefined)
			 		 {
			 		   if(updatedObject.data.action=='save'){
				 		 console.log("return from dialog type="+updatedObject.data.type+" data="+JSON.stringify(updatedObject.data)+" path="+updatedObject.data.path);
				 		 		if(updatedObject.data.path.endsWith('*'))
				 		 		   updatedObject.data.path=updatedObject.data.path.substring(0,updatedObject.data.path.length-1);
				 		 		 for(let file of updatedObject.data.files){
				 		 		    if(file.checked){
				 		 		        updatedObject.data.path=updatedObject.data.path.concat(file.name+"/*");
				 		 		       break;
				 		 		    }
				 		 		 }
				 		 		updatedObject.data.data.Root=updatedObject.data.path;
				 		 		var self=this;
				 		 		this.zone.run(() =>{
				 		 		  self.thisdatasource=updatedObject.data.data;
				 		 		})
				 		 }
				 	 }
				 	 else
				 	   console.log ("return from dialog, no data")

				console.log("file modal open");
			}				
  }

}
