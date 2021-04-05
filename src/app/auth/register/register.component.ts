import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public frmRegisterLogin: FormGroup;
  constructor(public formBuilder: FormBuilder,
    public UsuarioService: UsuarioService,
    public router: Router
  ) {




    this.frmRegisterLogin = this.formBuilder.group(
      {
        nombre: ['yonathan', [Validators.required]]
        , email: ['test17@gmail.com', [Validators.required, Validators.email]]
        , password: ['123456', [Validators.required]]
        , password2: ['123456', [Validators.required]]
        , terminos: [false]
      }, {
      validators: this.paswordsIguales('password', 'password2')
    }
    );


  }

  ngOnInit(): void {
  }

  public registerLogin() {

    this.UsuarioService.crearUsuario(
      this.getControl("nombre").value,
      this.getControl("password").value,
      this.getControl("email").value)
      .subscribe((data: any) => {
        if (data.ok) {
          Swal.fire(
            {
              title: "informacion",
              text: "Usuario creado",
              icon: 'success'

            });

          this.router.navigateByUrl('/login');
        }
        else {
          Swal.fire(
            {
              title: "Error",
              text: data.msg,
              icon: 'error'

            }

          );
        }

      });

  }

  public getControl(control: string) {
    return this.frmRegisterLogin.controls[control];
  }
  public esValido(control: string): boolean {
    return this.getControl(control).invalid && this.getControl(control).touched;
  }

  public esValidoTerminosUso(): boolean {
    return (!this.getControl("terminos").value) && this.getControl("terminos").touched;
  }

  public validarContrasenas(control1: string = "password", control2: string = "password2"): boolean {
    let booValido: boolean = false;
    if (this.frmRegisterLogin) {

      if (this.getControl(control1).value === this.getControl(control2).value) {
        booValido = false;
      }
      else {
        booValido = true;
      }

    }
    return booValido;
  }


  paswordsIguales(control1: string = "password", control2: string = "password2") {
    return (formGroup: FormGroup) => {
      const password1 = formGroup.get(control1);
      const password2 = formGroup.get(control2);
      if (password1?.value == password2?.value) {
        password2?.setErrors(null);
      }
      else {
        password2?.setErrors({ noEsigual: true });
      }
    }

  }

}
