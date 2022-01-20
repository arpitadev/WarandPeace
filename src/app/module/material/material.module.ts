import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table'


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule
  ],
  exports: [
    CommonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule
  ],
})
export class MaterialModule { }
