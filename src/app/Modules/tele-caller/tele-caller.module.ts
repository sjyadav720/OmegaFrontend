import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDefaultersComponent } from './view-defaulters/view-defaulters.component';
import { SendDefaultersFeedbackComponent } from './send-defaulters-feedback/send-defaulters-feedback.component';
import { RouterModule, Routes } from '@angular/router';

const teleRouting: Routes = [
  {
    path: 'viewdefaulters',
    component: ViewDefaultersComponent,
  },
  {
    path: 'senddefaultersfeedback',
    component: SendDefaultersFeedbackComponent,
  },
];

@NgModule({
  declarations: [ViewDefaultersComponent, SendDefaultersFeedbackComponent],
  imports: [CommonModule, RouterModule.forChild(teleRouting)],
  exports: [ViewDefaultersComponent, SendDefaultersFeedbackComponent],
})
export class TeleCallerModule {}
