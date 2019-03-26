import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { NavApiService } from 'app/api/nav.service';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  searchToggleStatus: boolean;
  headerData: any = [];

  constructor(public settings: SettingsService, public api: NavApiService) {

    this.headerData = [
      {
        text: '油液分析工具',
        icon: 'menu-fold'
      },
      {
        text: '离线振动巡检',
        icon: 'menu-fold'
      },
      {
        text: '在线振动监测',
        icon: 'menu-fold'
      },
      {
        text: '预警事件分析',
        icon: 'menu-fold'
      },
      {
        text: '报警事件分析',
        icon: 'menu-fold'
      }
    ]
  }

  toggleCollapsedSidebar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
