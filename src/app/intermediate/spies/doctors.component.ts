import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './doctors.service';

@Component({
  selector: 'app-medicos',
  template: `
    <p>
      medicos works!
    </p>
  `,
  styles: []
})
export class DoctorsComponent implements OnInit {

  public doctors: any[] = [];
  public mensajeError!: string;

  constructor( public _medicoService: DoctorsService ) { }

  ngOnInit() {
    this._medicoService.getDoctors()
          .subscribe( medicos => this.doctors = medicos );
  }

  addDoctor() {
    const medico = { nombre: 'Médico Juan Carlos' };

    this._medicoService.addDoctor(medico)
          .subscribe({
            next: medicoDB => this.doctors.push(medicoDB),
            error:err => {this.mensajeError = err.toString(),console.log(this.mensajeError)
            }
          }
          );
  }

  deleteDoctor(id: string) {
    const confirmar = confirm('Are you sure you want to delete this doctor?');

    if ( confirmar ) {
      this._medicoService.deleteDoctor( id );
    }

  }

}
