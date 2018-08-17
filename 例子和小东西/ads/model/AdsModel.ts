/**
 * Created by zhuzihao on 2017/5/5.
 */

export  class AdsModel{
  title:string;
  desc:string;
  icon:string;
  url:string;
  constructor(title:string,desc?:string,icon?:string,url?:string){
    this.title=title;
    this.desc =desc || "";
    this.icon = icon;
    this.url= url;
  }
}
