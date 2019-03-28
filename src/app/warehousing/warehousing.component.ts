
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource,MatSort,MatDialog} from '@angular/material';
import {WarehousingService} from '../shared/warehousing.service';
import {Warehousing} from '../models/warehousing.class';
import { FormControl } from '@angular/forms';
import {WarehousingModalComponent} from './warehousing-modal/warehousing-modal.component';
import Swal from 'sweetalert2';
declare const $: any;
import { NgxDrpOptions, PresetItem, Range } from 'ngx-mat-daterange-picker';
@Component({
  selector: 'app-warehousing',
  templateUrl: './warehousing.component.html',
  styleUrls: ['./warehousing.component.scss']
})
export class WarehousingComponent implements OnInit {
  displayedColumns: string[] = ['id', 'maphieunhap', 'time', 'ncc','tientra', 'status','action'];
  dataSource ;
  selected:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private warehousingService: WarehousingService, public dialog:MatDialog){}
  @ViewChild(MatSort) sort: MatSort;
  nameFilter = new FormControl('');

  range:Range = {fromDate:new Date(), toDate: new Date()};
  options:NgxDrpOptions;
  presets:Array<PresetItem> = [];
  @ViewChild('dateRangePicker') dateRangePicker;


  ngOnInit() {
    this.warehousingService.getAllWarehousings().subscribe((data: Warehousing[])=>{
      this.dataSource = new MatTableDataSource<Warehousing>(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  
    const today = new Date();
    this.setupPresets();
    this.options = {
                    presets: this.presets,
                    format: 'dd-MM-yyyy',
                    range: {fromDate:today, toDate: today},
                    placeholder:"Theo thời gian",
                    applyLabel: "Xong",
                    cancelLabel: "Hủy",
                    animation:true,
                    calendarOverlayConfig: {
                    shouldCloseOnBackdropClick: false,
                    hasBackdrop: false
                    }
                  };
   const resetRange = {fromDate: today, toDate: today};
   this.dateRangePicker.resetDates(resetRange); // will trigger selectedDateRangeChanged
                   

  }

  openDialog(){
    let dialogRef = this.dialog.open(WarehousingModalComponent, {
      width: this. isMobileMenu()? '90%':'80%',
      data: 'ok'
      

    });
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};
  showConfirm(){
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa phiếu nhập này không?',
      text: "Bạn sẽ không thể khôi phục thông tin và lịch sử giao dịch!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!',
      cancelButtonText: 'Hủy'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title:'Đã xóa!',
          text: 'Thông tin phiếu nhập đã được xóa.',
          type:'success',
          confirmButtonText: 'Xong'
        }
        )
      }
    })
  }
 // handler function that receives the updated date range object
 updateRange(range: Range){
  this.range = range;
}  

// helper function to create initial presets
setupPresets() {

  const backDate = (numOfDays) => {
    const today = new Date();
    return new Date(today.setDate(today.getDate() - numOfDays));
  }
  
  const today = new Date();
  const yesterday = backDate(1);
  const minus7 = backDate(7)
  const minus30 = backDate(30);
  const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const currMonthEnd = new Date(today.getFullYear(), today.getMonth()+1, 0);
  const lastMonthStart = new Date(today.getFullYear(), today.getMonth()-1, 1);
  const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
  
  this.presets =  [
    {presetLabel: "Hôm qua", range:{ fromDate:yesterday, toDate:today }},
    {presetLabel: "7 ngày trước", range:{ fromDate: minus7, toDate:today }},
    {presetLabel: "30 ngày trước", range:{ fromDate: minus30, toDate:today }},
    {presetLabel: "Tháng này", range:{ fromDate: currMonthStart, toDate:currMonthEnd }},
    {presetLabel: "Tháng trước", range:{ fromDate: lastMonthStart, toDate:lastMonthEnd }}
  ]
}
}
