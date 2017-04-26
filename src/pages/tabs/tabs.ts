import { Component } from '@angular/core';

import { AttractionsPage } from '../attractions/attractions';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {PageTab} from "../../models/common.model";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tabs: PageTab[] = [
    {component: AttractionsPage, title: "Attractions", icon: "planet"},
    {component: AboutPage, title: "About", icon: "information-circle"},
    {component: ContactPage, title: "Contact", icon: "contacts"},
  ];

  constructor() {

  }
}
