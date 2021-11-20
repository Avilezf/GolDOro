import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  async changeSlide(){
    if( await this.slides.getActiveIndex() === 2){
      this.router.navigate(['/login']);
    }else{
      this.slides.slideNext();
    }



  }

}
