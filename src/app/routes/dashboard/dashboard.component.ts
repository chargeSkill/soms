import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.less'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  tabs = [
    {
      title: '健康状态评估'
    },
    {
      title: '趋势分析',
    },
    {
      title: '衰退分析',
    },
    {
      title: '事件处理',
    }
  ];

  list = [
    {
      name: 'A列气缸排温',
      unit: '（℃）',
      analog: 68
    },
    {
      name: 'B列气缸排温',
      unit: '（℃）',
      analog: 90
    },
    {
      name: 'C列气缸排温',
      unit: '（℃）',
      analog: 20
    },
    {
      name: 'D列气缸排温',
      unit: '（℃）',
      analog: 33
    }
  ]

  constructor(
    private http: _HttpClient
  ) { }

  ngOnInit() {
    
    for(let i = 0;i< this.list.length; i++){
      console.log(this.fnReturnState(this.list[i].analog))
    }
  }

  fnReturnState(num: any) {
    let state: string = '';
    if(num >= 0 && num < 0.8){
      state = 'danger';
    }else if(num >= 0.8 && num < 24.3){
      state = 'warn';
    }else if(num >= 24.3 && num < 57.2){
      state = 'normal';
    }else if(num >= 57.2 && num < 80.8){
      state = 'warn';
    }else if(num >= 80.8 && num <= 100){
      state = 'danger';
    }else{
      state = 'unnormal';
    }
    return {
      state: state,
      style: {
        bottom: num + "%"
      }
    };
    // switch (num) {
    //   case num >= 80.8:
    //     state = 'danger';
    //     break;
    //   case num >= 57.2 && num < 80.8:
    //     state = 'warn';
    //     break;
    //   case num >= 24.3 && num < 57.2:
    //     state = 'nomarl';
    //     break;
    //   case num >= 0.8 && num < 24.3:
    //     state = 'warn';
    //     break;
    //   case num >= 0 && num < 0.8:
    //     state = 'danger';
    //     break;
    //   default:
    //     state = 'unnomarl';
    // }
  };
}
