import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CommonsModule } from '@commons/commons.module'
import { PButtonComponent } from '@panther/p-button/p-button.component'

import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardComponent } from './dashboard.component'

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonsModule,
    PButtonComponent,
  ],
})
export class DashboardModule {}
