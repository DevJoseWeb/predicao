import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { GrowlModule } from "primeng/growl";
import { ConfirmationService } from 'primeng/api';

import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { MultiSelectModule } from 'primeng/multiselect';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';

import { AppComponent } from './app.component';
import { AppService } from '../app/app.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    TableModule,
    ConfirmDialogModule,
    CalendarModule,
    DropdownModule,
    TabViewModule,
    CardModule,
    TooltipModule,
    MultiSelectModule,
    KeyFilterModule,
    DialogModule,
    FileUploadModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    GrowlModule,
    FormsModule,
    InputMaskModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
