import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario={
    nombre: "Cesar",
    apellido:"Piñero",
    correo:"cesarpinero@gmail.com",
    pais: 'CRI',
    genero: 'M'
  }

  paises: any[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises()
        .subscribe(paises =>{
          this.paises = paises;
          this.paises.unshift({
            nombre: '[Seleccione Pais]',
            codigo: ''
          })

        })
  }

  guardar(forma:NgForm){
    

    if(forma.invalid){

      Object.values(forma.controls).forEach(control => {
        control.markAllAsTouched();
      });

      return;
    }
    console.log(forma.value)
  }

}
