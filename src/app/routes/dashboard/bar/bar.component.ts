import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnInit {
  @Input()
  public item;

  constructor() { }

  ngOnInit() {
    console.log(this.item)
  }

  fnReturnState(item: any) {
    let state: string = '';
    let ceil = 100;
    let floor = 0;
    let err: boolean = true;
    /**
     * ceil、floor 代表临界值
     * 刻度 l：低低 ll：低 h：高 hh：高高
     * analog 代表当前值
     */
    if(this.fnCheckState(item.proRule)){
      err = false;
      state = 'unnormal';
    }else{
      let l = item.proRule.l; 
      let ll = item.proRule.ll;
      let h = item.proRule.h;
      let hh = item.proRule.hh;
      let num = item.analog;
      if(num >= floor && num < l){
        state = 'danger';
      }else if(num >= l && num < ll){
        state = 'warn';
      }else if(num >= ll && num < h){
        state = 'normal';
      }else if(num >= h && num < hh){
        state = 'warn-est';
      }else if(num >= hh && num <= ceil){
        state = 'danger-est';
      }else{
        state = 'unnormal';
      }
    }
    return { state: state, err: err };
  }

  fnCheckState(oRule: any){
    let isRule: boolean = false;
    for(let rule in oRule){
      if(rule !== 'ceil' && rule !== 'floor'){
        if (!oRule[rule]) {
          isRule = true;
          break;
        }
      }
    }
    return isRule;
  }
}
