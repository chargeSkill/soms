import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { DemoApiService } from './demo.service';

@NgModule({
  imports: [
    CommonModule,
    ApiRoutingModule
  ],
  providers: [ DemoApiService ],
  declarations: []
})
export class ApiModule { }
