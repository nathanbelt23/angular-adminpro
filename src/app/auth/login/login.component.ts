import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { RespuestaUsuario, Usuario } from '../../model/usuario.model';
import { Subscription } from 'rxjs';
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public auth2: any;

  frmLogin = this.formBuilder.group(
    {
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      recordar: [false]
    }
  );
  constructor(
    public router: Router,
    public usuarioService: UsuarioService,
    public formBuilder: FormBuilder,
    public    ngZone :   NgZone
  ) { }

  ngOnInit(): void {

    let email = localStorage.getItem("email")
    if (email) {

      this.frmLogin.controls["email"].setValue(email);
      this.frmLogin.controls["recordar"].setValue(true);
    }

    this.renderButton();

  }


  public getControlValue(control: string) {
    return this.frmLogin.get(control)?.value;

  }

  public login() {

    this.usuarioService.loginDatosForm(this.frmLogin.value).subscribe(
      (data: RespuestaUsuario) => {
            this.establecerIngresoUsuario(data);
      }

    );
  }

//-------------------Ingreso por google-------------------//
  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSuccess,
      'onfailure': this.onFailure
    });
    this.startApp();
  }
  onSuccess(googleUser: any) {
  }
  onFailure(error: any) {
    console.log(error);
  }

  startApp() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '733728187174-6jt45m4f52ilj0m9e7u4jbn90pvebr2o.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
  
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });

  }

  attachSignin(element: any) {
    this.auth2.attachClickHandler(element, {},
      (googleUser: any) => {
      this.usuarioService.loginGoogle(googleUser.getAuthResponse().id_token).subscribe(data=>
      {
  
          this.establecerIngresoUsuario(data);
      }

      );
      }, (error: any) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

//------------------- Fin -Ingreso por google-------------------//
    establecerIngresoUsuario(data: RespuestaUsuario)
    {

      if (data.comparacion == true) {
      //  this.usuarioService.usuario = data.usuario||new  Usuario();

      ///console.error(this.usuarioService.usuario);

        localStorage.setItem('token', data.token);
        if (this.getControlValue("recordar")) {
          localStorage.setItem('email', this.getControlValue("email"));
        }
     
        Swal.fire(
          {
            title: "Hola",
            icon: 'success',
            text: `Bienvenido ${data.usuario?.nombre}`

          }
        );

        this.ngZone.run(()=>
        {
        this.router.navigateByUrl('/');
        });

      }
      else {
        Swal.fire(
          {
            title: "Error",
            icon: 'warning',
            text: data.msg

          }

        );
      }



    }

}
