import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutModule } from '../../layouts/layout.module';
import { PagesComponent } from '../pages.component';
import { ManageCustomersPartnersComponent } from './manage-customers-partners.component';

const routes: Routes = [
  {
    "path": "",
    "component": PagesComponent,
    "children": [
      {
        "path": "",
        "component": ManageCustomersPartnersComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), LayoutModule
  ],
  declarations: [
    ManageCustomersPartnersComponent
  ],
  exports: [
    RouterModule
  ]
})

export class ManageCustomersPartnersModule {}
