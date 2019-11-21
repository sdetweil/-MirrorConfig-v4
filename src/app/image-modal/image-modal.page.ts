import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';
import { DataProvider } from '../services/data/data';
import {NgZone} from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  ngOnInit() {
  }

 thisimage: any;
  modaltype: any;
  modal: any;
  file:any;
  selectorFiles:any;

  constructor( public navParams: NavParams,
  						 private data: DataProvider,
  						 public modalCtrl: ModalController,
  						 private zone: NgZone) {
    this.modaltype=navParams.get("type");
    this.thisimage=navParams.get("object");   
    this.selectorFiles=[];
    }

	closeModal() {
		this.modalCtrl.dismiss();
	}
	saveModal()
	{
		this.modalCtrl.dismiss({otype:'image',data:this.thisimage,files:this.selectorFiles}/* some data, thisdatasource has been updated*/);
	}
 /* ionViewDidLoad() {
    console.log('ionViewDidLoad ImageModalPage');
  } */
    checkSelectedTag(tag1, tag2){
  	return tag1==tag2;
  }
    checkSelectedSource(source1, source2){
  	return source1==source2;
  }
  f(){
  	if(this.thisimage.DataSource!='')
  	   this.thisimage.PathFromSource="/*";
  }
  
  async doubleClick(object, opendialog){
  			//this.thisimage=object;
      if(this.thisimage.PathFromSource!="" && this.thisimage.DataSource!="")
      {
		    var modal=this.modalCtrl.create( { component:'FileModalPage', componentProps:{type:'file',object:object,dialog_title:"Image: select files or folder"} })
		    
		    let updatedObject = await modal;
				  
			 		 // Do things with data coming from modal, for instance :
			 		 if(updatedObject != undefined){
				 		 //console.log("return from dialog otype="+updatedObject.otype+" data="+JSON.stringify(updatedObject.data));

				 		 //console.log("return from dialog type="+updatedObject['type']+" data="+JSON.stringify(updatedObject['data'])+" path="+updatedObject['path']);
				 		 console.log("there are "+updatedObject['files'].length+" file entries to process");
				 		 this.selectorFiles=updatedObject['files'];
				 		 console.log("after save filelist");
				 		 if(object.PathFromSource!=updatedObject['path'])
				 		 {
				 		 		updatedObject['data']['PathFromSource']=updatedObject['path'];
				 		 }				 		 		
				 		 console.log("after update");
				 		 var self=this;
		 		 		 this.zone.run(() =>{
		 		 		   console.log("before in run");
		 		 		   self.thisimage=updatedObject['data'];
		 		 		   console.log("after in run");
		 		 		 })				 		 	
		 		 		 console.log("after run");
				 	 }
				 	  else
				 	   console.log ("return from dialog, no data")
				//await modal.present();
			}
			else
			{
			  alert("you must select a Datasource");				
			}
  }
}
