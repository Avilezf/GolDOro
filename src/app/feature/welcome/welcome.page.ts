import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor() {

  }

  ngOnInit() {

  }

  async changeSlide(){
    if( await this.slides.getActiveIndex() === 2){
      console.log('login');
    }else{
      this.slides.slideNext();
    }



  }

}
