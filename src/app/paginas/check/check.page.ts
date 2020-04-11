import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data:any[]=[
    {
      name:"primary",
      selected: !this
    },
    {
      name:"secondary",
      selected: true
    },
    {
      name:"tertiary",
      selected: !true
    },
    {
      name:"success",
      selected: true
    },
]

  constructor() { }

  ngOnInit() {
  }

  onClick(check){
    console.log(check);
    
  }

}
