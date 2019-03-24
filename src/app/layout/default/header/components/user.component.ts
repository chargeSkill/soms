import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'header-user',
  template: `
  <nz-dropdown nzPlacement="bottomRight">
    <div class="alain-default__nav-item d-flex align-items-center px-sm" nz-dropdown>
      <i nz-icon type="user" theme="outline"></i>
      用户信息
    </div>
    <div nz-menu>
      <div nz-menu-item routerLink="/pro/account/center"><i nz-icon type="user"></i>
      个人中心
      </div>
      <li nz-menu-divider></li>
      <div nz-menu-item (click)="logout()"><i nz-icon type="logout"></i>
        退出登录
      </div>
    </div>
  </nz-dropdown>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
// <div class="alain-default__nav-item d-flex align-items-center px-sm" nz-dropdown>
//       <nz-avatar [nzSrc]="settings.user.avatar" nzSize="small"></nz-avatar>
//       {{settings.user.name}}
//     </div>
// <div nz-menu-item routerLink="/pro/account/settings"><i nz-icon type="setting" class="mr-sm"></i>
// 个人设置
// </div>
// <div nz-menu-item routerLink="/exception/trigger"><i nz-icon type="close-circle" class="mr-sm"></i>
// 触发错误
// </div>

export class HeaderUserComponent {
  constructor(
    public settings: SettingsService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
  ) {}

  logout() {
    this.tokenService.clear();
    localStorage.removeItem("authorization");
    this.router.navigateByUrl(this.tokenService.login_url);
  }
}
