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
            "url": "/dashboard/tables",
          },
          {
            "name": "Request License for Deloitte Hardware",
            "url": "/dashboard/forms",
          },
          {
            "name": "Request License for Third Party Hardware",
            "url": "/dashboard/tables",
          }
        ]
      },
      {
        "name": "Resource Manager",
        "url": "#",
        "items": [
          {
            "name": "Manage Licenses",
            "url": "/dashboard/forms",
          },
          {
            "name": "Create customer license",
            "url": "/dashboard/forms",
          },
          {
            "name": "Create a developer license",
            "url": "/dashboard/tables",
          },
          {
            "name": "Manage customers / patners",
            "url": "/dashboard/tables",
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
