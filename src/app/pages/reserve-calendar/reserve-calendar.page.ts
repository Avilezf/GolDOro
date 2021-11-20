import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-calendar',
  templateUrl: './reserve-calendar.page.html',
  styleUrls: ['./reserve-calendar.page.scss'],
})
export class ReserveCalendarPage implements OnInit {

  date: string;
  type: 'string';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }

  next(){
    this.router.navigate(['/reserve-field']);
  }
}
