import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule, AppRoutingModule, ComponentsModule ],
  declarations: [ AppComponent, AdminLayoutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
