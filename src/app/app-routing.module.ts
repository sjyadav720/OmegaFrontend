import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { EntryComponentComponent } from './MainPage/entry-component/entry-component.component';
import { DashboardComponent } from './MainPageButtons/dashboard/dashboard.component';
import { HomePageComponent } from './MainPageButtons/home-page/home-page.component';
import { LoginComponent } from './MainPageButtons/login/login.component';
import { AccountHeadModule } from './Modules/account-head/account-head.module';
import { CreditManagerModule } from './Modules/credit-manager/credit-manager.module';
import { OperationalExecutiveModule } from './Modules/operational-executive/operational-executive.module';
import { RelationExecutiveModule } from './Modules/relation-executive/relation-executive.module';
import { EMICalculatorComponent } from './Template/emicalculator/emicalculator.component';

const routes: Routes = [
  {
    path: '',
    component: EntryComponentComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'emiCalculator', component: EMICalculatorComponent },
    ],
  },

  {
    path: 'role',
    component: DashboardComponent,
    children: [
      {
        path: 'relationexecutive',
        loadChildren: () => RelationExecutiveModule,
      },
      {
        path: 'operationalexecutive',
        loadChildren: () => OperationalExecutiveModule,
      },
      {
        path: 'creditmanager',
        loadChildren: () => CreditManagerModule,
      },
      {
        path: 'accounthead',
        loadChildren: () => AccountHeadModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
