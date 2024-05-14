import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-ang-material',
  templateUrl: './ang-material.component.html',
  styleUrl: './ang-material.component.css'
})
export class AngMaterialComponent {
  static dialog: ComponentType<unknown>;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AngMaterialComponent.dialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
