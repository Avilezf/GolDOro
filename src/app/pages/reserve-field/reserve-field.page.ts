import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-field',
  templateUrl: './reserve-field.page.html',
  styleUrls: ['./reserve-field.page.scss'],
})
export class ReserveFieldPage implements OnInit {

  colores: boolean[] = [false, false, false];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next(){
    this.router.navigate(['/reserve-payment']);
  }

  colors(num){
    this.colores[0] = false;
    this.colores[1] = false;
    this.colores[2] = false;
    this.colores[num] = true;
  }

}
