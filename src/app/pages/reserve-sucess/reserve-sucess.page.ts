import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-sucess',
  templateUrl: './reserve-sucess.page.html',
  styleUrls: ['./reserve-sucess.page.scss'],
})
export class ReserveSucessPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['/list-field']);
  }

}
