import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { WarehouseService } from "./shared/warehouse.service";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [
    BrowserModule, FormsModule,RouterModule, AppRoutingModule, ComponentsModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, LoginComponent],

  providers: [WarehouseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
