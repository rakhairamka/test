import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../helpers';

declare let mLayout: any;
@Component({
    selector: "app-aside-nav",
    templateUrl: "aside-nav.pug",
    encapsulation: ViewEncapsulation.None,
})

/*
interface Menu {
  name: string,
  url?: string,
  items?: [MenuItem]
}

interface MenuItem {
  name: string,
  url: string
}
*/

export class AsideNavComponent implements OnInit, AfterViewInit {

    menus = [
      {
        "name": "Common User",
        "url": "#",
        "items": [
          {
            "name": "Manage My License",
            "url": "/dashboard/manageMyLicense",
          },
          {
            "name": "Request License for Deloitte Hardware",
            "url": "/dashboard/reqLicenseInternal",
          },
          {
            "name": "Request License for Third Party Hardware",
            "url": "/dashboard/reqLicenseThirdParty",
          }
        ]
      },
      {
        "name": "Resource Manager",
        "url": "#",
        "items": [
          {
            "name": "Manage Licenses",
            "url": "/dashboard/manageLicense",
          },
          {
            "name": "Create customer license",
            "url": "/dashboard/reqLicenseCustomer",
          },
          {
            "name": "Create a developer license",
            "url": "/dashboard/reqLicenseDevelpoper",
          },
          {
            "name": "Manage Customers/Patners",
            "url": "/dashboard/manageCustomerPartners",
          }
        ]
      }
    ];

    constructor() {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        mLayout.initAside();
    }

}
