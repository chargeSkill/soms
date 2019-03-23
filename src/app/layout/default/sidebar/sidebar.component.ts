import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import {Router} from '@angular/router';
import { SettingsService } from '@delon/theme';
import {Module} from '../../../models/module';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  // 是否有左侧菜单
  hasLeftMenu = false;
  // 是否显示菜单
  menuDisplay = true;
  activeMenuId: string;
  // 选中的画面ModuleId
  selectedModuleId: string;
  // 选中顶级Module
  selectedTopModule: Module;
  // 用户Modules
  userModules: Module[];
  //点击一级菜单是否出现展开合住
  firstMenuExpand = true;

  // 监听URL变化
  private urlChangeSub: Subscription;

  // URL change
  private urlChangeSource = new Subject<any>();
  urlChange$ = this.urlChangeSource.asObservable();


  constructor(public settings: SettingsService, public router: Router) {
    this.urlChangeSub = this.urlChange$.subscribe(astronaut => {
      this.matchModuleByUrl();
    });
    let jsonData = {
 "status": "success",
 "data": [
   {
     "id": "5c6f5d5aabbcdd3ff40c60de",
     "code": "100",
     "icon": "",
     "name": "健康状态总览",
     "parentId": "5ac0c4a0c053f417ac310e3f",
     "treeOrder": 1,
     "url": "/1",
     "state": "1",
     "checked": false,
     "child": null,
     "tree": null,
     "showTrend": 0,
     "showDecline": 0,
     "showEvent": 0
   },
   {
     "id": "5c6f7355abbcdd1fdc36658f",
     "code": "200",
     "icon": "",
     "name": "推进系统",
     "parentId": "5ac0c4a0c053f417ac310e3f",
     "treeOrder": 1,
     "url": "/2",
     "state": "1",
     "checked": false,
     "child": [{
         "id": "5c735f8eabbcdd0f00611a08",
         "code": "201",
         "icon": "",
         "name": "左推进系统",
         "parentId": "5c6f7355abbcdd1fdc36658f",
         "treeOrder": 1,
         "url": "/2",
         "state": "1",
         "checked": false,
         "child": null,
         "tree": null,
         "showTrend": 1,
         "showDecline": 1,
         "showEvent": 1
       },
       {
         "id": "5c735faeabbcdd0f00611a09",
         "code": "202",
         "icon": "",
         "name": "右推进系统",
         "parentId": "5c6f7355abbcdd1fdc36658f",
         "treeOrder": 2,
         "url": "/22",
         "state": "1",
         "checked": false,
         "child": null,
         "tree": null,
         "showTrend": 1,
         "showDecline": 1,
         "showEvent": 1
       }
     ],
     "tree": null,
     "showTrend": 0,
     "showDecline": 0,
     "showEvent": 0
   },
   {
     "id": "5c735fdfabbcdd0f00611a0a",
     "code": "300",
     "icon": "",
     "name": "电力系统",
     "parentId": "5ac0c4a0c053f417ac310e3f",
     "treeOrder": 3,
     "url": "/3",
     "state": "1",
     "checked": false,
     "child": [{
         "id": "5c7360efabbcdd0f00611a0b",
         "code": "301",
         "icon": "",
         "name": "1#柴油发电机",
         "parentId": "5c735fdfabbcdd0f00611a0a",
         "treeOrder": 1,
         "url": "/3",
         "state": "1",
         "checked": false,
         "child": [{
             "id": "5c7361e3abbcdd0f00611a10",
             "code": "3011",
             "icon": "",
             "name": "气缸",
             "parentId": "5c7360efabbcdd0f00611a0b",
             "treeOrder": 1,
             "url": "/311",
             "state": "1",
             "checked": false,
             "child": null,
             "tree": null,
             "showTrend": 1,
             "showDecline": 1,
             "showEvent": 1
           },
           {
             "id": "5c73620eabbcdd0f00611a11",
             "code": "3012",
             "icon": "",
             "name": "增压器",
             "parentId": "5c7360efabbcdd0f00611a0b",
             "treeOrder": 2,
             "url": "/312",
             "state": "1",
             "checked": false,
             "child": null,
             "tree": null,
             "showTrend": 1,
             "showDecline": 1,
             "showEvent": 1
           },
           {
             "id": "5c73620eabbcdd0f00611a12",
             "code": "3013",
             "icon": "",
             "name": "发电机",
             "parentId": "5c7360efabbcdd0f00611a0b",
             "treeOrder": 3,
             "url": "/313",
             "state": "1",
             "checked": false,
             "child": null,
             "tree": null,
             "showTrend": 1,
             "showDecline": 1,
             "showEvent": 1
           },
           {
             "id": "5c73620eabbcdd0f00611a13",
             "code": "3014",
             "icon": "",
             "name": "轴承",
             "parentId": "5c7360efabbcdd0f00611a0b",
             "treeOrder": 4,
             "url": "/314",
             "state": "1",
             "checked": false,
             "child": null,
             "tree": null,
             "showTrend": 1,
             "showDecline": 1,
             "showEvent": 1
           },
           {
             "id": "5c736258abbcdd0f00611a14",
             "code": "3015",
             "icon": "",
             "name": "附属系统",
             "parentId": "5c7360efabbcdd0f00611a0b",
             "treeOrder": 5,
             "url": "/315",
             "state": "1",
             "checked": false,
             "child": null,
             "tree": null,
             "showTrend": 1,
             "showDecline": 1,
             "showEvent": 1
           }
         ],
         "tree": null,
         "showTrend": 0,
         "showDecline": 0,
         "showEvent": 0
       },
       {
         "id": "5c736116abbcdd0f00611a0c",
         "code": "302",
         "icon": "",
         "name": "2#柴油发电机",
         "parentId": "5c735fdfabbcdd0f00611a0a",
         "treeOrder": 2,
         "url": "/32",
         "state": "1",
         "checked": false,
         "child": null,
         "tree": null,
         "showTrend": 0,
         "showDecline": 0,
         "showEvent": 0
       },
       {
         "id": "5c736136abbcdd0f00611a0d",
         "code": "303",
         "icon": "",
         "name": "3#柴油发电机",
         "parentId": "5c735fdfabbcdd0f00611a0a",
         "treeOrder": 3,
         "url": "/33",
         "state": "1",
         "checked": false,
         "child": null,
         "tree": null,
         "showTrend": 0,
         "showDecline": 0,
         "showEvent": 0
       },
       {
         "id": "5c73614babbcdd0f00611a0e",
         "code": "304",
         "icon": "",
         "name": "4#柴油发电机",
         "parentId": "5c735fdfabbcdd0f00611a0a",
         "treeOrder": 4,
         "url": "/34",
         "state": "1",
         "checked": false,
         "child": null,
         "tree": null,
         "showTrend": 0,
         "showDecline": 0,
         "showEvent": 0
       }
     ],
     "tree": null,
     "showTrend": 0,
     "showDecline": 0,
     "showEvent": 0
   },
   {
     "id": "5c7361cbabbcdd0f00611a0f",
     "code": "400",
     "icon": "",
     "name": "锅炉",
     "parentId": "5ac0c4a0c053f417ac310e3f",
     "treeOrder": 4,
     "url": "/4",
     "state": "1",
     "checked": false,
     "child": [{
         "id": "5c73bbc34593daa73bd614a7",
         "code": "401",
         "icon": "",
         "name": "废气锅炉",
         "parentId": "5c7361cbabbcdd0f00611a0f",
         "treeOrder": 1,
         "url": "/4",
         "state": "1",
         "checked": false,
         "child": null,
         "tree": null,
         "showTrend": 1,
         "showDecline": 1,
         "showEvent": 1
       },
       {
         "id": "5c73bbc34593daa73bd614a8",
         "code": "402",
         "icon": "",
         "name": "燃油锅炉",
         "parentId": "5c7361cbabbcdd0f00611a0f",
         "treeOrder": 2,
         "url": "/42",
         "state": "1",
         "checked": false,
         "child": null,
         "tree": null,
         "showTrend": 1,
         "showDecline": 1,
         "showEvent": 1
       }
     ],
     "tree": null,
     "showTrend": 0,
     "showDecline": 0,
     "showEvent": 0
   },
   {
     "id": "5c73c0144593daa73bd614a9",
     "code": "500",
     "icon": "",
     "name": "疏浚系统",
     "parentId": "5ac0c4a0c053f417ac310e3f",
     "treeOrder": 5,
     "url": "/5",
     "state": "1",
     "checked": false,
     "child": [{
         "id": "5c73c0144593daa73bd614ab",
         "code": "501",
         "icon": "",
         "name": "舱内泵电动机",
         "parentId": "5c73c0144593daa73bd614a9",
         "treeOrder": 1,
         "url": "/5",
         "state": "1",
         "checked": false,
         "child": [{
             "id": "5c73c0144593daa73bd614ad",
             "code": "5011",
             "icon": "",
             "name": "1#舱内泵电动机",
             "parentId": "5c73c0144593daa73bd614ab",
             "treeOrder": 1,
             "url": "/511",
             "state": "1",
             "checked": false,
             "child": null,
             "tree": null,
             "showTrend": 1,
             "showDecline": 1,
             "showEvent": 1
           },
           {
             "id": "5c73c0144593daa73bd614af",
             "code": "5012",
             "icon": "",
             "name": "2#舱内泵电动机",
             "parentId": "5c73c0144593daa73bd614ab",
             "treeOrder": 2,
             "url": "/512",
             "state": "1",
             "checked": false,
             "child": null,
             "tree": null,
             "showTrend": 1,
             "showDecline": 1,
             "showEvent": 1
           }
         ],
         "tree": null,
         "showTrend": 0,
         "showDecline": 0,
         "showEvent": 0
       },
       {
         "id": "5c73c0144593daa73bd614b1",
         "code": "502",
         "icon": "",
         "name": "绞刀电动机",
         "parentId": "5c73c0144593daa73bd614a9",
         "treeOrder": 2,
         "url": "/52",
         "state": "1",
         "checked": false,
         "child": null,
         "tree": null,
         "showTrend": 0,
         "showDecline": 0,
         "showEvent": 0
       },
       {
         "id": "5c73c0144593daa73bd614b3",
         "code": "503",
         "icon": "",
         "name": "水下泵电动机",
         "parentId": "5c73c0144593daa73bd614a9",
         "treeOrder": 3,
         "url": "/53",
         "state": "1",
         "checked": false,
         "child": null,
         "tree": null,
         "showTrend": 1,
         "showDecline": 1,
         "showEvent": 1
       },
       {
         "id": "5c73c0144593daa73bd614b5",
         "code": "504",
         "icon": "",
         "name": "起桥绞车电动机",
         "parentId": "5c73c0144593daa73bd614a9",
         "treeOrder": 4,
         "url": "/54",
         "state": "1",
         "checked": false,
         "child": null,
         "tree": null,
         "showTrend": 0,
         "showDecline": 0,
         "showEvent": 0
       },
       {
         "id": "5c73c0144593daa73bd614b7",
         "code": "505",
         "icon": "",
         "name": "横移绞车电动机",
         "parentId": "5c73c0144593daa73bd614a9",
         "treeOrder": 5,
         "url": "/55",
         "state": "1",
         "checked": false,
         "child": null,
         "tree": null,
         "showTrend": 0,
         "showDecline": 0,
         "showEvent": 0
       },
       {
         "id": "5c73c0144593daa73bd614b9",
         "code": "506",
         "icon": "",
         "name": "液压泵",
         "parentId": "5c73c0144593daa73bd614a9",
         "treeOrder": 6,
         "url": "/56",
         "state": "1",
         "checked": false,
         "child": null,
         "tree": null,
         "showTrend": 0,
         "showDecline": 0,
         "showEvent": 0
       }
     ],
     "tree": null,
     "showTrend": 0,
     "showDecline": 0,
     "showEvent": 0
   }
 ],
 "msg": "加载菜单数据成功！"
};

    this.userModules = jsonData.data;
    this.matchModuleByUrl();

  }

  ngOnDestroy() {
    this.urlChangeSub.unsubscribe();
  }

  matchModuleByUrl() {
    if (this.userModules != null) {
      this.matchModules(this.router.url, this.userModules).then((matchedModule) => {
        this.selectedTopModule = matchedModule.topModule;
        console.log(this.selectedTopModule,'this.selectedTopModule哈哈');
        this.hasLeftMenu = this.selectedTopModule != null && this.selectedTopModule.child.length > 0;
        this.activeMenuId = matchedModule.activeMenuId;
        this.selectedModuleId = matchedModule.selectedMenuId;
      });
    }
  }

  /**
   * 通过URL匹配菜单
   * @param {string} url
   * @param {Module} modules
   * @returns {Promise<{topModule: Module; activeMenuId: string; selectedMenuId: string}>}
   */
  public matchModules(url: string, modules: Module[]): Promise<{topModule: Module, activeMenuId: string, selectedMenuId: string}> {
    let topModule: Module = null;
    let activeMenuId: string = null;
    let selectedMenuId: string = null;
    return new Promise<{topModule: Module, activeMenuId: string, selectedMenuId: string}>(resolve => {
      if (url !== '/') {
        if (url.startsWith('/')) {
          url = url.substring(1);
        }
        const endIndex = url.indexOf('?');
        if (endIndex >= 0) {
          url = url.substring(0, endIndex);
        }
        for (const top of modules) {
          // if (top.asMenu) {
            if (top.url && top.url.includes(url)) {
              topModule = top;
            }
            if (top.child && top.child.length > 0) {
              for (const second of top.child) {
                // if (second.asMenu) {
                  if (second.url && second.url.includes(url)) {
                    topModule = top;
                    activeMenuId = second.id;
                    selectedMenuId = second.id;
                    resolve({topModule: topModule, activeMenuId: activeMenuId, selectedMenuId: selectedMenuId});
                    return;
                  } else if (second.child && second.child.length > 0) {
                    for (const third of second.child) {
                      // if (third.asMenu) {
                        if (third.url && third.url.includes(url)) {
                          topModule = top;
                          activeMenuId = second.id;
                          selectedMenuId = third.id;
                          resolve({topModule: topModule, activeMenuId: activeMenuId, selectedMenuId: selectedMenuId});
                          return;
                        }
                      // }
                    }
                  }
                // }
              }
            }
          // }
        }
      }
      resolve({topModule: topModule, activeMenuId: activeMenuId, selectedMenuId: selectedMenuId});
    });
  }



  /**
   * 切换一级菜单
   * @param item
   */
  topMenuClick(item: Module) {
    let oldSelectedTopModule = this.selectedTopModule;

    if(this.firstMenuExpand){
      this.selectedTopModule = item;
      this.firstMenuExpand = false;
    }else{
      this.selectedTopModule = null;
      this.firstMenuExpand = true;
    }
    console.log(oldSelectedTopModule,this.selectedTopModule,'this.selectedTopModule');
    if (item.url) {
      // this.router.navigateByUrl(item.action);
      for (const children of item.child) {
        if (children.url === item.url) {
          this.selectedModuleId = children.id;
          this.activeMenuId = children.id;
          break;
        }
      }
    }
  }

  /**
   * 切换二级菜单
   * @param {Module} item
   */
  leftMenuClick(item: Module) {
    this.activeMenuId = ((this.activeMenuId === item.id && item.child.length !== 0) ? null : item.id);
    if (item.url) {
      this.selectedModuleId = item.id;
      // this.router.navigateByUrl(item.action);
    }
  }

  /**
   * 三级菜单点击
   * @param {Module} item
   */
  leftSubMenuClick(item: Module) {
    // this.activeMenuId = ((this.activeMenuId === item.moduleId && item.child.length !== 0) ? null : item.moduleId);
    if (item.url) {
      this.selectedModuleId = item.id;
      // this.router.navigateByUrl(item.action);
    }
  }

  leftThirdMenuClick(item: Module){
    if (item.url) {
      this.selectedModuleId = item.id;
      // this.router.navigateByUrl(item.action);
    }
  }

}
