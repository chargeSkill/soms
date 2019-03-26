import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Subject } from 'rxjs';
import { NavApiService } from 'app/api/nav.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.less'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  initIndex = -1;
  referState: any;
  item = {
    "id": "5c909ad8abbcdd2ba8975196",
    "name": "A1气缸排温",
    "ename": "out_temp_A1",
    "type": 0,
    "unitType": 0,
    "switches": null,
    "analog": 68,
    "proRule": {
      "ceil": 89,
      "floor": 55,
      "hh": 99,
      "h": 80,
      "l": 30,
      "ll": 20
    }
  }
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
  mockData: any = {};
  AData: any;
  BData: any;
  A1Data: any;
  A2Data: any;
  B1Data: any;
  B2Data: any;
  // mockData = {
  //   "id": "5c9097c2abbcdd2254263abd",
  //   "moduleId": "5c7361e3abbcdd0f00611a10",
  //   "module": "cylinder",
  //   "devices": [
  //     {
  //       "id": "5c909ad8abbcdd2ba897519c",
  //       "name": "A列气缸",
  //       "ename": "A_cylinder",
  //       "properties": [
  //         {
  //           "id": "5c909ad8abbcdd2ba8975196",
  //           "name": "A1气缸排温",
  //           "ename": "out_temp_A1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 68,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909ad8abbcdd2ba8975197",
  //           "name": "A2气缸排温",
  //           "ename": "out_temp_A2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 13,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909ad8abbcdd2ba8975198",
  //           "name": "A3气缸排温",
  //           "ename": "out_temp_A3",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 70,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909ad8abbcdd2ba8975199",
  //           "name": "A4气缸排温",
  //           "ename": "out_temp_A4",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 79,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909ad8abbcdd2ba897519a",
  //           "name": "A5气缸排温",
  //           "ename": "out_temp_A5",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 69,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909ad8abbcdd2ba897519b",
  //           "name": "A6气缸排温",
  //           "ename": "out_temp_A6",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 46,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c9097c2abbcdd2254263abc",
  //       "name": "B列气缸",
  //       "ename": "B_cylinder",
  //       "properties": [
  //         {
  //           "id": "5c9097c2abbcdd2254263ab6",
  //           "name": "B1气缸排温",
  //           "ename": "out_temp_B1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 55,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c9097c2abbcdd2254263ab7",
  //           "name": "B2气缸排温",
  //           "ename": "out_temp_B2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 68,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c9097c2abbcdd2254263ab8",
  //           "name": "B3气缸排温",
  //           "ename": "out_temp_B3",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 32,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c9097c2abbcdd2254263ab9",
  //           "name": "B4气缸排温",
  //           "ename": "out_temp_B4",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 22,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c9097c2abbcdd2254263aba",
  //           "name": "B5气缸排温",
  //           "ename": "out_temp_B5",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 45,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c9097c2abbcdd2254263abb",
  //           "name": "B6气缸排温",
  //           "ename": "out_temp_B6",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 75,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c909c5aabbcdd1d28ddfd8e",
  //       "name": "A1气缸",
  //       "ename": "cylinder_A1",
  //       "properties": [{
  //           "id": "5c909c5aabbcdd1d28ddfd8c",
  //           "name": "1号缸套温度",
  //           "ename": "shell_temp_1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 77,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909c5aabbcdd1d28ddfd8d",
  //           "name": "2号缸套温度",
  //           "ename": "shell_temp_2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 78,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c909cacabbcdd33e433f93b",
  //       "name": "A2气缸",
  //       "ename": "cylinder_A2",
  //       "properties": [{
  //           "id": "5c909cacabbcdd33e433f939",
  //           "name": "1号缸套温度",
  //           "ename": "shell_temp_1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 38,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909cacabbcdd33e433f93a",
  //           "name": "2号缸套温度",
  //           "ename": "shell_temp_2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 17,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c909ce2abbcdd0e3036f280",
  //       "name": "A3气缸",
  //       "ename": "cylinder_A3",
  //       "properties": [{
  //           "id": "5c909ce2abbcdd0e3036f27e",
  //           "name": "1号缸套温度",
  //           "ename": "shell_temp_1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 73,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909ce2abbcdd0e3036f27f",
  //           "name": "2号缸套温度",
  //           "ename": "shell_temp_2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 10,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c909d1babbcdd11b8a4693f",
  //       "name": "A4气缸",
  //       "ename": "cylinder_A4",
  //       "properties": [{
  //           "id": "5c909d1babbcdd11b8a4693d",
  //           "name": "1号缸套温度",
  //           "ename": "shell_temp_1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 17,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909d1babbcdd11b8a4693e",
  //           "name": "2号缸套温度",
  //           "ename": "shell_temp_2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 36,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c909d3aabbcdd11a4323603",
  //       "name": "A5气缸",
  //       "ename": "cylinder_A5",
  //       "properties": [{
  //           "id": "5c909d3aabbcdd11a4323601",
  //           "name": "1号缸套温度",
  //           "ename": "shell_temp_1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 65,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909d3aabbcdd11a4323602",
  //           "name": "2号缸套温度",
  //           "ename": "shell_temp_2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 50,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c909d59abbcdd361ce770c0",
  //       "name": "A6气缸",
  //       "ename": "cylinder_A6",
  //       "properties": [{
  //           "id": "5c909d59abbcdd361ce770be",
  //           "name": "1号缸套温度",
  //           "ename": "shell_temp_1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 24,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909d59abbcdd361ce770bf",
  //           "name": "2号缸套温度",
  //           "ename": "shell_temp_2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 59,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c909dafabbcdd3e0079275d",
  //       "name": "B1气缸",
  //       "ename": "cylinder_B1",
  //       "properties": [{
  //           "id": "5c909dafabbcdd3e0079275b",
  //           "name": "1号缸套温度",
  //           "ename": "shell_temp_1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 39,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909dafabbcdd3e0079275c",
  //           "name": "2号缸套温度",
  //           "ename": "shell_temp_2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 38,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c909dc6abbcdd0d24db706e",
  //       "name": "B2气缸",
  //       "ename": "cylinder_B2",
  //       "properties": [{
  //           "id": "5c909dc6abbcdd0d24db706c",
  //           "name": "1号缸套温度",
  //           "ename": "shell_temp_1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 52,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909dc6abbcdd0d24db706d",
  //           "name": "2号缸套温度",
  //           "ename": "shell_temp_2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 16,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c909dddabbcdd0ac091beaf",
  //       "name": "B3气缸",
  //       "ename": "cylinder_B3",
  //       "properties": [{
  //           "id": "5c909dddabbcdd0ac091bead",
  //           "name": "1号缸套温度",
  //           "ename": "shell_temp_1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 48,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909dddabbcdd0ac091beae",
  //           "name": "2号缸套温度",
  //           "ename": "shell_temp_2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 14,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c909df3abbcdd3ed80a5d7c",
  //       "name": "B4气缸",
  //       "ename": "cylinder_B4",
  //       "properties": [{
  //           "id": "5c909df3abbcdd3ed80a5d7a",
  //           "name": "1号缸套温度",
  //           "ename": "shell_temp_1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 46,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909df3abbcdd3ed80a5d7b",
  //           "name": "2号缸套温度",
  //           "ename": "shell_temp_2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 53,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c909e0eabbcdd1094ec2950",
  //       "name": "B5气缸",
  //       "ename": "cylinder_B5",
  //       "properties": [{
  //           "id": "5c909e0eabbcdd1094ec294e",
  //           "name": "1号缸套温度",
  //           "ename": "shell_temp_1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 12,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909e0eabbcdd1094ec294f",
  //           "name": "2号缸套温度",
  //           "ename": "shell_temp_2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 64,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       "id": "5c909e2eabbcdd2fe4a4aa21",
  //       "name": "B6气缸",
  //       "ename": "cylinder_B6",
  //       "properties": [{
  //           "id": "5c909e2eabbcdd2fe4a4aa1f",
  //           "name": "1号缸套温度",
  //           "ename": "shell_temp_1",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 72,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         },
  //         {
  //           "id": "5c909e2eabbcdd2fe4a4aa20",
  //           "name": "2号缸套温度",
  //           "ename": "shell_temp_2",
  //           "type": 0,
  //           "unitType": 0,
  //           "switches": null,
  //           "analog": 57,
  //           "proRule": {
  //             "ceil": 89,
  //             "floor": 55,
  //             "hh": 99,
  //             "h": 80,
  //             "l": 30,
  //             "ll": 20
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // }
  // AData = [this.mockData.devices[0]];
  // BData = [this.mockData.devices[1]];
  // A1Data = this.fnGetA1Data(this.mockData.devices.slice(2,8),0);
  // A2Data = this.fnGetA1Data(this.mockData.devices.slice(2,8),1);
  // B1Data = this.fnGetA1Data(this.mockData.devices.slice(8),0);
  // B2Data = this.fnGetA1Data(this.mockData.devices.slice(8),1);
  constructor(
    private http: _HttpClient,
    private api: NavApiService
  ) { 

  }

  ngOnInit() {
    this.getBarData({ moduleId: '5c7361e3abbcdd0f00611a10' });

    this.referState = setInterval(() => {
      this.getBarData({ moduleId: '5c7361e3abbcdd0f00611a10' });
    },5000);
  }

  ngOnDestroy() {
    clearInterval(this.referState);
  }

  addActive(index) {
    this.initIndex = index;
    console.log("add active",index)
  }

  getBarData(params){
    this.api.getCylinder(params).subscribe((res:any) => {
      console.log(res)
      this.mockData = res.data;
      this.AData = [this.mockData.devices[0]];
      this.BData = [this.mockData.devices[1]];
      this.A1Data = this.fnGetA1Data(this.mockData.devices.slice(2,8),0);
      this.A2Data = this.fnGetA1Data(this.mockData.devices.slice(2,8),1);
      this.B1Data = this.fnGetA1Data(this.mockData.devices.slice(8),0);
      this.B2Data = this.fnGetA1Data(this.mockData.devices.slice(8),1);
    })
  }

  fnGetA1Data(data,index){
    let a1Data = [];
    data.forEach(item => {
      // console.log('fnGetA1Data',item)
      a1Data.push(item.properties[index])
    });
    return a1Data;
  }

  fnReturnState(item: any) {
    let state: string = '';
    let ceil = 100;
    let floor = 0;
    let err: boolean = true;
    /**
     * ceil、floor 代表临界值
     * 刻度 ll：低低 l：低 h：高 hh：高高
     * analog 代表当前值
     */
    if(this.fnCheckState(item.proRule)){
      err = false;
      state = 'unnormal';
    }else{
      let ll = item.proRule.ll; 
      let l = item.proRule.l;
      let h = item.proRule.h;
      let hh = item.proRule.hh;
      let num = item.analog;
      if(num < ll){
        state = 'danger';
      }else if(num >= ll && num < l){
        state = 'warn';
      }else if(num >= l && num < h){
        state = 'normal';
      }else if(num >= h && num < hh){
        state = 'warn-est';
      }else if(num >= hh){
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
