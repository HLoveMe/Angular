/**
 * Created by zhuzihao on 2017/5/5.
 */
/**
 * Created by zhuzihao on 2017/5/5.
 */
import {
  Component, Input, ComponentFactoryResolver, AfterViewInit, ViewChild, OnChanges,
  TemplateRef, Renderer
} from '@angular/core';
import { AdsModel } from "./model/AdsModel"
import { AdsItem } from "./model/AdsItem"
import {AdsContainer} from "./adsComponents/AdsContainer";
import {AdsBase} from "./adsComponents/AdsBase";


@Component({
  selector:"ad-bannder",
  template:`
  <div host></div>
`
})
export class Adsbanner implements AfterViewInit{
  @Input() datas:[AdsItem];
  @ViewChild(AdsContainer) adcontainer?:AdsContainer;
  currentIndex:number = -1;
  constructor(private Resolver:ComponentFactoryResolver,private render:Renderer){}
  ngAfterViewInit(){
    setInterval(()=>{
      this.currentIndex += 1;
      this.loadComponet()
    },2000)
  }

  loadComponet(){
    this.currentIndex = (this.currentIndex ) % this.datas.length;
    let tar = this.datas[this.currentIndex];
    let factory = this.Resolver.resolveComponentFactory(tar.item);
    this.adcontainer.container.clear();
    let com = this.adcontainer.container.createComponent(factory);
    // (<AdsBase>com.instance).data = tar.target;
    (com.instance as AdsBase).data=tar.target;
  }
}

