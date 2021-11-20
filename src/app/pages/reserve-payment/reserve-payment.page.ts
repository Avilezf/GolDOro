import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-payment',
  templateUrl: './reserve-payment.page.html',
  styleUrls: ['./reserve-payment.page.scss'],
})
export class ReservePaymentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  reserve(){
    this.router.navigate(['/reserve-sucess']);
  }

}
