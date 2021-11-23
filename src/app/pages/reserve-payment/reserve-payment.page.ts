import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reserve-payment',
  templateUrl: './reserve-payment.page.html',
  styleUrls: ['./reserve-payment.page.scss'],
})
export class ReservePaymentPage implements OnInit {


  datas: any;
  loading: boolean;

  constructor(private route: ActivatedRoute, private router: Router, public toastController: ToastController) {
    this.loading = false;
    this.route.queryParams.subscribe(params => {
      if (params && params.data) {
        this.datas = JSON.parse(params.data);
      }
    });
   }

  ngOnInit() {
  }

  async reserve(){
    this.loading = true;
    setTimeout(async () => {
      const toast =  await this.toastController.create({
        color: 'success',
        message: 'Reserva Exitosa!',
        duration: 3000
      });
      toast.present();
      this.loading = false;
      this.router.navigate(['/reserve-sucess']);

    }, 5000);


  }

}
