/**
 * Created by zhuzihao on 2017/5/5.
 */
import {Directive, Component, Input} from '@angular/core';
import { AdsBase } from "./AdsBase"
import { AdsModel } from "../model/AdsModel"
@Component({
  template:`
  <div>
    <span>{{data.title}}</span>
    <img src="{{data.icon}}" width="40px" height="40px"> 
  </div>
`
})

export class AdsBBComponent implements AdsBase{
  @Input() data:AdsModel
}
