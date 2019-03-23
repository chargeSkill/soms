import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { NavApiService } from './nav.service';

@NgModule({
  imports: [
    CommonModule,
    ApiRoutingModule
  ],
  providers: [ NavApiService ],
  declarations: []
})
export class ApiModule { }
