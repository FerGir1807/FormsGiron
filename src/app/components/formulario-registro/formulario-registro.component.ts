import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {

  constructor() {
    let regEx: string = "^[a-zA-Z ]+$";
    this.controles = {
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(regEx)]),
      primerApellido: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(regEx)]),
      segundoApellido: new FormControl('', [Validators.minLength(2),Validators.pattern(regEx)]),
      edad: new FormControl('', [Validators.min(18), Validators.max(99), Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required])
    }

    this.formularioRegistro = new FormGroup(this.controles);

  }

  formularioRegistro: FormGroup;
  controles: any;
  registroExitoso: boolean = false;

  registrarUsuario() {
    this.registroExitoso = true;
    console.log(this.formularioRegistro);
  }

}
