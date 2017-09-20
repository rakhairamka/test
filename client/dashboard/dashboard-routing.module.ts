import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/home/home.module#DashboardHomeModule'
      },
      {
        path: 'manageMyLicense',
        loadChildren: './pages/manage-my-license/manage-my-license.module#ManageMyLicenseModule'
      },
      {
        path: 'reqLicenseInternal',
        loadChildren: './pages/create-license-internal/create-license-internal.module#CreateLicenseInternalModule'
      },
      {
        path: 'reqLicenseThirdParty',
        loadChildren: './pages/create-license-third-party/create-license-third-party.module#CreateLicenseThirdPartyModule'
      },
      {
        path: 'manageLicense',
        loadChildren: './pages/manage-license/manage-license.module#ManageLicenseModule'
      },
      {
        path: 'reqLicenseCustomer',
        loadChildren: './pages/create-license-customer/create-license-customer.module#CreateLicenseCustomerModule'
      },
      {
        path: 'reqLicenseDevelpoper',
        loadChildren: './pages/create-license-developer/create-license-developer.module#CreateLicenseDeveloperModule'
      },
      {
        path: 'manageCustomerPartners',
        loadChildren: './pages/manage-customers-partners/manage-customers-partners.module#ManageCustomersPartnersModule'
      },
      {
        path: 'forms',
        loadChildren: './pages/forms/forms.module#FormsModule'
      },
      {
        path: 'tables',
        loadChildren: './pages/tables/tables.module#TablesModule'
      },
      {
        path: 'schema-form',
        loadChildren: './pages/custom-form/custom-form.module#CustomFormModule'
      },
      {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfileModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {}
