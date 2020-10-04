import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  showDialog(){
    const dialogRef = this.dialog.open(DialogBodyComponent, {
     
    }); 
    setTimeout(() => {
      dialogRef.close();
    }, 10000);
  }
  

}
