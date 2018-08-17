import {Injectable} from '@angular/core';
import {EventManagerPlugin} from "@angular/platform-browser/src/dom/events/event_manager";

/***
 * 支持多事件注册 （click,mousedown,...）= "event($event)"
 * {provide:EVENT_MANAGER_PLUGINS,useClass:MultiEventPlugin,multi:true}
 * 
*/
@Injectable()
export class MultiEventPlugin extends EventManagerPlugin{

  //把多个事件分割
  getMultiEventArray(eventName: string): string[] {
    return eventName.split(",")
      .filter((item, index): boolean => { return item && item != '' })
  }
  supports(eventName: string): boolean{
    let res = this.getMultiEventArray(eventName).length>1
    console.log(eventName,res);
    return res;
  }
  addEventListener(element: HTMLElement, eventName: string, handler: Function): Function{
    let zone = this.manager.getZone();
    let eventsArray = this.getMultiEventArray(eventName);
    let outsideHandler = (event: any) => {
      zone.runGuarded(() => handler(event));
    };
    return zone.runOutsideAngular(() => {
      eventsArray.forEach((singleEventName: string) => {
        this.manager.addEventListener(element, singleEventName, outsideHandler);
      });
    })
  }
  addGlobalEventListener(element: string, eventName: string, handler: Function): Function{
    let zone = this.manager.getZone();
    let eventsArray = this.getMultiEventArray(eventName);
    let outsideHandler = (event: any) => zone.runGuarded(() => handler(event));

    return this.manager.getZone().runOutsideAngular(() => {
      eventsArray.forEach((singleEventName: string) => {
        this.manager.addGlobalEventListener(element, singleEventName,
          outsideHandler);
      });
    });
  }
}
