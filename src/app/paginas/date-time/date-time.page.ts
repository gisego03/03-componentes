import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  date = new Date();
  customPickerOptions;
  customDate;
  constructor() {
    this.customPickerOptions  = {
      buttons:[
        {
          text: 'Save',
          handler: (data)=>{
            console.log(data);
            
          }
        },
        {
          text: 'Log',
          handle:()=>{
            console.log("console.log");
            return false;
          }
        }]
    }
   }

  ngOnInit() {
  }

  change(e){
    console.log(e);
    this.date = new Date(e.detail.value);
  }
}
