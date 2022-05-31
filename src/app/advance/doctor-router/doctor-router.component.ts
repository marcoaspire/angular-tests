import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-router',
  templateUrl: './doctor-router.component.html',
  styles: []

})
export class DoctorRouterComponent implements OnInit {

  id!:string;

  constructor(public router:Router, public activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe( params => {
        this.id= params['id'];
      });

  }

  saveDoctor(){
    this.router.navigate(['doctors','123']);
  }

}
