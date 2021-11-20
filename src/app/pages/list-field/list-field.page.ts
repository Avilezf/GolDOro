import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-field',
  templateUrl: './list-field.page.html',
  styleUrls: ['./list-field.page.scss'],
})
export class ListFieldPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  zoccer(){
    this.router.navigate(['/info-field']);
  }

}
