import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {DialogData} from './model';
import {PlayDialogComponent} from './play-dialog/play-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cypress-play';
  hi = 'Hi';
  firstName: string;
  lastName: string;
  name: string;
  showGreetings = false;
  loginIds: string;

  constructor(private httpClient: HttpClient,
              public dialog: MatDialog) {
  }

  sayHi(): void {
    if (this.firstName && this.lastName) {
      this.name = this.firstName + ' ' + this.lastName;
      this.showGreetings = true;
    } else {
      this.clear();
    }
  }

  clear(): void {
    this.showGreetings = false;
    this.name = '';
    this.firstName = '';
    this.lastName = '';
  }

  configHi(): void {
    const dialogRef = this.dialog.open(PlayDialogComponent, {
      width: '400px',
      data: { greetings: this.hi } as DialogData
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      console.log('The dialog was closed');
      if (result) {
        this.hi = result.greetings;
      } else {
        this.hi = 'Hi';
      }
    });
  }

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.httpClient.get('https://api.github.com/users', httpOptions).subscribe((response: any[]) => {
       this.loginIds = response.map(x => x.login).join(', ');
    });
  }

}
