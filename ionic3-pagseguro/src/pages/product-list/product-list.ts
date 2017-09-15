import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductHttp} from "../../providers/product-http";

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  products = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public productHttp: ProductHttp) {
  }

  ionViewDidLoad() {
    this.productHttp
        .query()
        .subscribe(data => this.products = data);
  }

}
