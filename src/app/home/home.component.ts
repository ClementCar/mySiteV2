import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  hours!: string;
  minutes!: string;
  seconds!: string;
  date!: Date;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(this.showDate, 1000)
    this.showDate()
  }

  showDate() {
    this.date = new Date()
    this.hours = this.date.getHours().toString()
    this.minutes = this.date.getMinutes().toString()
    this.seconds = this.date.getSeconds().toString()
    if(+this.hours < 10 ){
      this.hours = '0' + this.hours;
    }
    if(+this.minutes < 10 ){
      this.minutes = '0' + this.minutes;
    }
    if(+this.seconds < 10 ){
      this.seconds = '0' + this.seconds;
    }
    // setTimeout(this.showDate, 1000)
    console.log(this.hours, this.minutes, this.seconds)
    // this.showDate().pipe(delay(1000))
    this.refresh
  }

  refresh() {
    var t = 1000;
    setTimeout(this.showDate, t)
  }

}
