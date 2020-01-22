import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatChipsModule,
  MatDatepickerModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';
import { ActionAdderComponent } from './action-adder/action-adder.component';
import {RouterModule, Routes} from '@angular/router';
import { ActionSelectorComponent } from './action-selector/action-selector.component';
import { ActionFormComponent } from './action-form/action-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AmazingTimePickerModule} from 'amazing-time-picker';
import {MatMomentTimeModule, MatNativeTimeModule, MatTimeSelectModule} from 'ngx-material-time-select';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';

const appRoutes: Routes = [
  { path: '', component: ActionAdderComponent },
  { path: 'action', component: ActionFormComponent },
  { path: 'action-selector', component: ActionSelectorComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ActionAdderComponent,
    ActionSelectorComponent,
    ActionFormComponent,
    FooterNavigationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTimeSelectModule,
    MatMomentTimeModule

  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
