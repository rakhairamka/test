import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutModule } from '../../layouts/layout.module';
import { PagesComponent } from '../pages.component';
import { CreateLicenseThirdPartyComponent } from './create-license-third-party.component';

const routes: Routes = [
  {
    "path": "",
    "component": PagesComponent,
    "children": [
      {
        "path": "",
        "component": CreateLicenseThirdPartyComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), LayoutModule
  ],
  declarations: [
    CreateLicenseThirdPartyComponent
  ],
  exports: [
    RouterModule
  ]
})

export class CreateLicenseThirdPartyModule {}
