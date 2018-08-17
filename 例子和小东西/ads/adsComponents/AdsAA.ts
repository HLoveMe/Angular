/**
 * Created by zhuzihao on 2017/5/5.
 */
import { Component, Input} from '@angular/core';
import { AdsBase } from "./AdsBase"
import { AdsModel } from "../model/AdsModel"
@Component({
  template:`
  <div>
    <p>{{data.title}}</p>
    <p>{{data.desc}}</p>
  </div>
`
})

export class AdsAAComponent implements AdsBase{
  @Input() data:AdsModel
}
