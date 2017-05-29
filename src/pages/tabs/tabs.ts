import { Component } from '@angular/core';

import { AttractionsPage } from '../attractions/attractions';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {PageTab} from "../../models/common.model";
import {RecommendationPage} from "../recommendation/recommendation";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tabs: PageTab[] = [
    {component: RecommendationPage, title: "Guide Me", icon: "planet"},
    {component: AttractionsPage, title: "Attractions", icon: "albums"},
  ];

  constructor() {

  }
}
