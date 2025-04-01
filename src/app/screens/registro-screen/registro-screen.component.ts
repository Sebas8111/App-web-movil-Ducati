import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
declare var $:any;
@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit{


  public user:any={};
  public errors: any={};

  public hide_1: boolean = false;
  public inputType_1: string = 'password';

  public selectedValue: string = "";
  public edades: any[] = [];


  constructor(
    private router :Router,
    private usuariosService: UsuariosService){}

  ngOnInit(): void {
    this.user=this.usuariosService.esquemaUser();
    this.llenarArrayEdades();

    console.log("Mi usuario es:",this.user)

  }


  public llenarArrayEdades(){
    for (let i = 18; i <= 80; i++) {
      this.edades.push({value: i});
    }
  }

  public terminosCondiciones(){

  }

  public registrar(){
       //Validar
       this.errors = [];

       this.errors = this.usuariosService.validarUsuario(this.user);
       if(!$.isEmptyObject(this.errors)){
         return false;
       }
       //TODO:Aquí va la lógica para registrar usuario.
    }

    public goLogin(){
      this.router.navigate(["login"]);
    }




  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  }


  showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

}
