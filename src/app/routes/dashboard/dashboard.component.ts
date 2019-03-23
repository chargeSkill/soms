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
      analog: 92
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
  }

}
