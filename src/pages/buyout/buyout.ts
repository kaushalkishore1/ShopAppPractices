import { NavParams, NavController } from 'ionic-angular';
import { Component } from "@angular/core";

@Component({
    selector:'page-buyout',
    templateUrl:'buyout.html'
})
export class BuyoutPage{
 productdata:{name:String,qty:number,price:number};
  constructor(private navParams:NavParams,private navCtrl: NavController){
    this.productdata = this.navParams.data;
  }

  onConfirmBuy(){
    this.navCtrl.popToRoot();
  }
}