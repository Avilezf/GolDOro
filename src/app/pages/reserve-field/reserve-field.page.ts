import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-field',
  templateUrl: './reserve-field.page.html',
  styleUrls: ['./reserve-field.page.scss'],
})
export class ReserveFieldPage implements OnInit {

  public total: number;
  costo1: number[] = [50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000];
  costo2: number[] = [50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000];
  costo3: number[] = [50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000];

  colores: boolean[] = [false, false, false];
  bandas1: boolean[] = [false, false, false, false, false, false, false, false];
  bandas2: boolean[] = [false, false, false, false, false, false, false, false];
  bandas3: boolean[] = [false, false, false, false, false, false, false, false];

  constructor(private router: Router) {
    this.total = 0;
   }

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
    this.total = 0;

    switch(num){
      case 0:
        this.bandas2 = [false, false, false, false, false, false, false, false];
        this.bandas3 = [false, false, false, false, false, false, false, false];
        break;
      case 1:
        this.bandas1 = [false, false, false, false, false, false, false, false];
        this.bandas3 = [false, false, false, false, false, false, false, false];
        break;

      case 2:
        this.bandas1 = [false, false, false, false, false, false, false, false];
        this.bandas2 = [false, false, false, false, false, false, false, false];
        break;
    }
  }

  badge1(num){
    if(this.bandas1[num]){
      this.bandas1[num] = false;
      this.total = this.total - this.costo1[num];
    }else{
      this.bandas1[num] = true;
      this.total = this.total + this.costo1[num];

    }
    console.log(this.total.valueOf());
  }

  badge2(num){
    if(this.bandas2[num]){
      this.bandas2[num] = false;
      this.total = this.total - this.costo2[num];
    }else{
      this.bandas2[num] = true;
      this.total = this.total + this.costo2[num];
    }
  }

  badge3(num){
    if(this.bandas3[num]){
      this.bandas3[num] = false;
      this.total = this.total - this.costo3[num];
    }else{
      this.bandas3[num] = true;
      this.total = this.total + this.costo3[num];
    }
  }

  noAvalible(){
    console.log('no');
  }

}
