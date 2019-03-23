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
  
  constructor(
    private http: _HttpClient
  ) { }

  ngOnInit() {
  }

}
