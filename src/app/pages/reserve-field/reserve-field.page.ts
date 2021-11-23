import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-reserve-field',
  templateUrl: './reserve-field.page.html',
  styleUrls: ['./reserve-field.page.scss'],
})
export class ReserveFieldPage implements OnInit {

  total1: number;
  total2: number;
  total3: number;
  costo1: number[] = [50000, 52000, 53000, 54000, 55000, 56000, 57000, 58000];
  costo2: number[] = [50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000];
  costo3: number[] = [50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000];

  colores: boolean[] = [false, false, false];
  bandas1: boolean[] = [false, false, false, false, false, false, false, false];
  bandas2: boolean[] = [false, false, false, false, false, false, false, false];
  bandas3: boolean[] = [false, false, false, false, false, false, false, false];

  constructor(private router: Router, public toastController: ToastController) {
    this.total1 = 0;
    this.total2 = 0;
    this.total3 = 0;
   }

  ngOnInit() {
  }

  next(){
    const total = this.total1 + this.total2 + this.total3;

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(total)
      }
    };
    this.router.navigate(['reserve-payment'], navigationExtras);
  }

  colors(num){
    this.colores[0] = false;
    this.colores[1] = false;
    this.colores[2] = false;
    this.colores[num] = true;

    switch(num){
      case 0:
        this.bandas2 = [false, false, false, false, false, false, false, false];
        this.bandas3 = [false, false, false, false, false, false, false, false];
        this.total2 = 0;
        this.total3 = 0;
        break;
      case 1:
        this.bandas1 = [false, false, false, false, false, false, false, false];
        this.bandas3 = [false, false, false, false, false, false, false, false];
        this.total1 = 0;
        this.total3 = 0;
        break;

      case 2:
        this.bandas1 = [false, false, false, false, false, false, false, false];
        this.bandas2 = [false, false, false, false, false, false, false, false];
        this.total1 = 0;
        this.total2 = 0;
        break;
    }
  }

  badge1(num){
    if(this.bandas1[num]){
      this.bandas1[num] = false;
      this.total1 = +this.total1 - +this.costo1[num];
    }else{
      this.bandas1[num] = true;
      this.total1 = +this.total1.valueOf() + +this.costo1[num];
    }
  }

  badge2(num){
    if(this.bandas2[num]){
      this.bandas2[num] = false;
      this.total2 = +this.total2 - +this.costo2[num];
    }else{
      this.bandas2[num] = true;
      this.total2 = +this.total2 + +this.costo2[num];
    }
  }

  badge3(num){
    if(this.bandas3[num]){
      this.bandas3[num] = false;
      this.total3 = +this.total3 - +this.costo3[num];
    }else{
      this.bandas3[num] = true;
      this.total3 = +this.total3 + +this.costo3[num];
    }
  }

  async noAvalible(){
      const toast = await this.toastController.create({
        color: 'danger',
        message: 'Estas canchas ya estan reservadas',
        duration: 2000
      });
      toast.present();
  }

}
