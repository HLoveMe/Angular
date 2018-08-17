/**
 * Created by zhuzihao on 2017/5/5.
 */
import { AdsModel } from "./AdsModel"
import {Type} from "@angular/core";


export  class AdsItem{
  constructor(public item:Type<any>,public target:AdsModel){}
}
