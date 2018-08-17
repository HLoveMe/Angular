/**
 * Created by zhuzihao on 2017/5/5.
 */
import {Directive, ViewContainerRef, OnInit, Renderer, Output, OnDestroy, ElementRef} from '@angular/core';
import {EventEmitter} from "@angular/forms/src/facade/async";
@Directive({
  selector:"[host]"
})

export class AdsContainer{
  constructor(public container:ViewContainerRef){}
}
