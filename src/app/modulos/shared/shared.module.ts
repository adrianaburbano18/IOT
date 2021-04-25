import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

// PRIME NG


import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations:
    [
      ToolbarComponent,
      SidebarComponent
    ],
  imports: [
    CommonModule,
    SharedRoutingModule,
   PrimengModule
  ],
  exports:
    [
      ToolbarComponent,
      SidebarComponent
    ]
})
export class SharedModule { }
