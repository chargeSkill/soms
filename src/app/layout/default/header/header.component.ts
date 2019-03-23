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
    // this.login({
    //   userName: 'admin',
    //   password: '123123'
    // })
    this.getNav();
  }

  getNav(){
    this.api.getJson().subscribe(data => {
      console.log('get json',data);
    })
  }

  login(params){
    this.api.login(params).subscribe(res => {
      console.log(res,'login')
    })
  }

  toggleCollapsedSidebar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
