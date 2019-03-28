import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-warehouse-modal',
  templateUrl: './warehouse-modal.component.html',
  styleUrls: ['./warehouse-modal.component.scss']
})
export class WarehouseModalComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  nameOwner = new FormControl('', [Validators.required]);
  address = new FormControl();
  active = new FormControl();
  nameErr:string ='';
  nameOwnerErr:string='';

  constructor(public dialogRef: MatDialogRef<WarehouseModalComponent>) { }

  ngOnInit() {

    this.getErrorMessage();
  }

  
  
  getErrorMessage() {
    if (this.name.hasError('required')) {
      this.nameErr = 'Bạn phải nhập tên kho';
    }
    if (this.nameOwner.hasError('required')) {
      this.nameOwnerErr =  'Bạn phải nhập tên thủ kho';
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
