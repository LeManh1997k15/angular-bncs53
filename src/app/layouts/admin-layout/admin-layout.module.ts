import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { WarehouseComponent } from '../../warehouse/warehouse.component';
import { WarehouseModalComponent } from '../../warehouse/warehouse-modal/warehouse-modal.component';
import { UserComponent } from '../../user/user.component';
import { WarehousingComponent } from 'app/warehousing/warehousing.component';
import { NgxMatDrpModule } from 'ngx-mat-daterange-picker';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatStepperModule
} from '@angular/material';
import { WarehousingModalComponent } from 'app/warehousing/warehousing-modal/warehousing-modal.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,

    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatStepperModule,
    NgxMatDrpModule

  ],
  entryComponents:[WarehouseModalComponent,WarehousingModalComponent],
  declarations: [
    DashboardComponent,
    WarehouseComponent,
    WarehouseModalComponent,
    UserComponent,
    WarehousingComponent,
    WarehousingModalComponent
  ],
  providers:[MatDatepickerModule]
})

export class AdminLayoutModule {}
