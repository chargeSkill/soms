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

  constructor(public settings: SettingsService, public api: NavApiService) {
    this.getCylinder({
      moduleId: '5c7361e3abbcdd0f00611a10'
    });
    this.getNav({});
  }

  getNav(params){
    this.api.getNavList(params).subscribe(data => {
      console.log('get json',data);
    })
  }

  getCylinder(params){
    this.api.getCylinder(params).subscribe(res => {
      console.log(res,'getCylinder')
    })
  }

  toggleCollapsedSidebar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
