import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource,MatSort,MatDialog} from '@angular/material';
import {WarehouseService} from '../shared/warehouse.service';
import {Warehouse} from '../models/warehouse.class';
import { FormControl } from '@angular/forms';
import {WarehouseModalComponent} from './warehouse-modal/warehouse-modal.component';
import Swal from 'sweetalert2';
declare const $: any;


@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'byUser', 'address', 'status','action'];
  dataSource = new MatTableDataSource<Warehouse>() ;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private warehouseService: WarehouseService, public dialog:MatDialog){}
  @ViewChild(MatSort) sort: MatSort;
  nameFilter = new FormControl('');
  ngOnInit() {
    
    this.warehouseService.getAllWarehouses().subscribe((data: Warehouse[])=>{
      this.dataSource.data = data;

    })
  
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  openDialog(){
    let dialogRef = this.dialog.open(WarehouseModalComponent, {
      width: this. isMobileMenu()? '90%':'40%',
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
      title: 'Bạn có chắc chắn muốn xóa kho này không?',
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
          text: 'Thông tin kho đã được xóa.',
          type:'success',
          confirmButtonText: 'Xong'
        }
        )
      }
    })
  }
}
