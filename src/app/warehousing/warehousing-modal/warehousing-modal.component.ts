import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  code: number;
  available:number;
  unit:string;
  sale:number;
  total:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-warehousing-modal',
  templateUrl: './warehousing-modal.component.html',
  styleUrls: ['./warehousing-modal.component.scss']
})



export class WarehousingModalComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'code', 'available','unit','sale','total'];
  dataSource = ELEMENT_DATA;
  constructor(public dialogRef: MatDialogRef<WarehousingModalComponent>) {}
today:string;
  ngOnInit() {
    const day = new Date();
    this.today = day.getDay() +"/" +day.getMonth()+"/"+day.getFullYear()+ ",   " + day.getHours() +":"+day.getMinutes();
   
  }
  
  closeDialog(){
    this.dialogRef.close();
  }
}