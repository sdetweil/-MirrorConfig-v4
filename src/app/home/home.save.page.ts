import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../services/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    d: any;
  viewers:any;
  datasources:any;
  images:any;
  tags:any;
  selectedRow: any;
  thisviewer: any
  saveobject:any;

	thisdatasource: any;
	thisimage: any;
	thistag:any;
	modaltype: any;
	modal: any;
	parentobject: any;
	
  constructor(private  data: DataProvider) { 
  console.log("in home constructor");
  		this.d=data;  		
			
  	  this.modal={};
    this.modaltype=null;
    this.selectedRow={};
    this.thisviewer={};
    this.saveobject={};
    this.parentobject=null;
    	this.thisdatasource={};
	  this.thisimage={};
	  this.thistag={};

/*		this.selectedRow['viewer'] = Constants.NOT_SELECTED;  // initialize our variable to null
		this.selectedRow['datasource'] = Constants.NOT_SELECTED;  // initialize our variable to null
		this.selectedRow['image'] = Constants.NOT_SELECTED;  // initialize our variable to null
		this.selectedRow['tag'] = Constants.NOT_SELECTED;  // initialize our variable to null */
		//this.doRefresh(0);
		console.log("in home constructor");
  }

  ngOnInit() {
  }
 getselectedRow(){
    return 0;
    }
  addeditClicked(){}
  menu(){}
}
