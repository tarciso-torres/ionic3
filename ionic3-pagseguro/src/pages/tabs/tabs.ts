import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import {ProductListPage} from "../product-list/product-list";
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProductListPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
