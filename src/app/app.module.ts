import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponentComponent } from './MainPage/entry-component/entry-component.component';
import { HomePageComponent } from './MainPageButtons/home-page/home-page.component';
import { LoginComponent } from './MainPageButtons/login/login.component';
import { DashboardComponent } from './MainPageButtons/dashboard/dashboard.component';
import { HomeHeaderComponent } from './Template/home-header/home-header.component';
import { FooterComponent } from './Template/footer/footer.component';
import { SideMenuComponent } from './Template/side-menu/side-menu.component';
import { DashHeaderComponent } from './Template/dash-header/dash-header.component';
import { CalculatorComponent } from './Template/calculator/calculator.component';
import { EMICalculatorComponent } from './Template/emicalculator/emicalculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RelationExecutiveModule } from './Modules/relation-executive/relation-executive.module';
import { OperationalExecutiveModule } from './Modules/operational-executive/operational-executive.module';
import { CreditManagerModule } from './Modules/credit-manager/credit-manager.module';
import { AccountHeadModule } from './Modules/account-head/account-head.module';
import { DealerModule } from './Modules/dealer/dealer.module';
import { TeleCallerModule } from './Modules/tele-caller/tele-caller.module';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponentComponent,
    HomePageComponent,
    LoginComponent,
    DashboardComponent,
    HomeHeaderComponent,
    FooterComponent,
    SideMenuComponent,
    DashHeaderComponent,
    CalculatorComponent,
    EMICalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RelationExecutiveModule,
    OperationalExecutiveModule,
    CreditManagerModule,
    AccountHeadModule,
    DealerModule,
    TeleCallerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
