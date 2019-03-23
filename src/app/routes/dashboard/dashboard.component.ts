import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.less'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  initIndex = -1;
  initIndex2 = -1;
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
  list2 = [
    {
      name: 'A2列气缸排温',
      unit: '（℃）',
      analog: 45
    },
    {
      name: 'B2列气缸排温',
      unit: '（℃）',
      analog: 26
    },
    {
      name: 'C2列气缸排温',
      unit: '（℃）',
      analog: 14
    }
  ]
  list3 = [
    {
      name: 'B2列气缸排温',
      unit: '（℃）',
      analog: 68
    },
    {
      name: 'B4列气缸排温',
      unit: '（℃）',
      analog: 90
    },
    {
      name: 'C2列气缸排温',
      unit: '（℃）',
      analog: 20
    },
    {
      name: 'D3列气缸排温',
      unit: '（℃）',
      analog: 33
    },
    {
      name: 'C2列气缸排温',
      unit: '（℃）',
      analog: 20
    },
    {
      name: 'D3列气缸排温',
      unit: '（℃）',
      analog: 33
    },
    {
      name: 'C2列气缸排温',
      unit: '（℃）',
      analog: 20
    }
  ]

  constructor(
    private http: _HttpClient
  ) { }

  ngOnInit() {
    
  }

  addActive(index){
    this.initIndex = index;
  }

  addActive2(index){
    this.initIndex2 = index;
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
  };
}
