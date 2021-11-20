import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-field',
  templateUrl: './info-field.page.html',
  styleUrls: ['./info-field.page.scss'],
})
export class InfoFieldPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  start(){
    this.router.navigate(['/reserve-calendar']);
  }

}
