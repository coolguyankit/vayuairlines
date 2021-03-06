import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchModule } from './components/flight-search/flight-search.module';
import { MainModule } from './components/main/main.module';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { PaymentSummaryComponent } from './components/payment-summary/payment-summary.component';
import { AncillariesComponent } from './components/ancillaries/ancillaries.component';
import { FlightListModule } from './components/flight-list/flight-list.module';
import { ItineraryConfirmationComponent } from './components/itinerary-confirmation/itinerary-confirmation.component';
import { MatSelectModule } from '@angular/material/select';
import { AncillariesDialogComponent } from './components/ancillaries/ancillaries-dialog/ancillaries-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingDetailsComponent,
    PaymentSummaryComponent,
    AncillariesComponent,
    ItineraryConfirmationComponent,
    AncillariesDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MainModule,
    FlightSearchModule,
    BrowserAnimationsModule,
    FlightListModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
