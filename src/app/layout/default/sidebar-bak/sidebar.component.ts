import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  isCollapsed: false;
  constructor(public settings: SettingsService) {}
}
