import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/login']);
  }

  async noAvalible(){
    const toast = await this.toastController.create({
      color: 'danger',
      message: 'No está disponible',
      duration: 2000
    });
    toast.present();
  }

}
