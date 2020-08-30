import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenCloseComponent } from './animate/app-open-close.component';
import { DefaultModeComponent } from './default-mode/default-mode.component';
import { OnpushModeComponent } from './onpush-mode/onpush-mode.component';
const routes: Routes = [
  {
    path: 'animate',
    component: OpenCloseComponent,
  },
  {
    path: 'default',
    component: DefaultModeComponent,
  },
  {
    path: 'onpush',
    component: OnpushModeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [OpenCloseComponent, DefaultModeComponent, OnpushModeComponent],
})
export class AppRoutingModule {}
