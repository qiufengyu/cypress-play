import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../model';

@Component({
  selector: 'app-play-dialog',
  templateUrl: './play-dialog.component.html',
  styleUrls: ['./play-dialog.component.css']
})
export class PlayDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PlayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
  }

}
