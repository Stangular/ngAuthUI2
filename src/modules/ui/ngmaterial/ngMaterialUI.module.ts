import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import {
  MatToolbarModule
  , MatListModule
  , MatMenuModule
  , MatInputModule
  , MatCardModule
  , MatButtonModule
  , MatIconModule
  , MatSelectModule
  , MatGridListModule
  , MatTableModule
  , MatTabsModule
  , MatExpansionModule
  , MatSidenavModule
  , MatDialogModule
  , MatSnackBarModule
  , MatProgressSpinnerModule
  , MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , ReactiveFormsModule
    , MatIconModule
    , MatToolbarModule
    , MatListModule
    , MatMenuModule
    , MatButtonModule
    , MatInputModule
    , MatCardModule
    , MatSelectModule
    , MatGridListModule
    , MatTableModule
    , MatTabsModule
    , MatExpansionModule
    , MatSidenavModule
    , MatDialogModule
    , MatSnackBarModule
    , MatProgressSpinnerModule
    , MatPaginatorModule
  ],

  declarations: [],
  exports: [
    MatListModule
    , MatIconModule
    , MatToolbarModule
    , MatMenuModule
    , MatButtonModule
    , MatInputModule
    , MatCardModule
    , MatSelectModule
    , MatGridListModule
    , MatTableModule
    , MatTabsModule
    , MatExpansionModule
    , MatSidenavModule
    , MatDialogModule
    , MatSnackBarModule
    , MatProgressSpinnerModule
    , MatPaginatorModule
  ],

  providers: []
})

export class ngMaterialModule { }
