import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent, CdkStep } from '@angular/cdk/stepper';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { Conexion } from './modelo/conexion';
import { Pais } from './modelo/pais';
import { ServicePais } from './service/service.pais';
import { ServiceConexion } from './service/service.conexion';
import { ThemePalette } from '@angular/material/core';

export interface Vegetable {
  name: string;
  color: ThemePalette;
}

const ELEMENT_DATA: Pais[] = [];
const ELEMENT_DATA2: Conexion[] = [];

//const ELEMENT_DATA: Empresa[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {
      showError: true,
      displayDefaultIndicatorType: false
    }
  }]
})

export class AppComponent implements OnInit {
  title = 'toqueapp';

  displayedColumns: string[] = ['id', 'nombre', 'cant_dias', 'precio', 'imagen'];
  dataSource = ELEMENT_DATA;

  stepper: MatStepper;
  stepOne: FormGroup;
  stepTree: FormGroup;
  step1completed = false;
  completed = false;
  isOptional: boolean = false;

  stepSelected: StepperSelectionEvent;
  stepActivo: CdkStep;
  stepPartida: CdkStep;
  stepDestino: CdkStep;

  botonHidden = false;
  partida = true;
  destino = false;

  pais: Pais = new Pais();
  //dataSource = ELEMENT_DATA;
  paises: Pais[];
  paisesList: Array<Pais>;
  paisesListViaje: Pais[] = [];
  dataSource2 = ELEMENT_DATA2;
  conexiones: Conexion[] = [];
  conexionList: Array<Conexion>;

  precioPaises = 0;
  diasPaises = 0;
  precioConexiones = 0;
  tarifaViaje = 2000;
  diasViaje = 3;

  precio_total = 0;
  dias_total = 0;

  rutaImg: string;
  paisPartida: string;
  paisDestino: string;

  vegetables: Vegetable[] = [
    { name: 'apple', color: undefined },
    { name: 'banana', color: 'primary' },
    { name: 'strawberry', color: 'accent' },
    { name: 'orange', color: 'warn' },
    { name: 'kiwi', color: null },
    { name: 'cherry', color: undefined },
  ];

  //@ViewChild('myStep', { static: false }) myStep;

  /*nextClicked(event) {
    // complete the current step
    this.stepper.selected.completed = true;
    // move to next step
    this.stepper.next();
  }*/

  // stepControl:

  constructor(private service: ServicePais, private serviceConexion: ServiceConexion, builder: FormBuilder) {
    this.stepOne = builder.group(
      {
        /*isNotEmpty: [
          '',
          Validators.compose(
            [Validators.required]
          )
        ]*/
      }
    );

    this.stepTree = builder.group(
      {
        /*isNotEmpty: [
          '',
          Validators.compose(
            [Validators.required]
          )
        ]*/

      }
    );

  }

  ngOnInit() {

    this.rutaImg = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    //this.paisPartida = "";
    //this.paisDestino = "";

    this.Cargar();


  }

  Cargar() {
    /*let id = localStorage.getItem("idEmpresa");
    let Nombre = localStorage.getItem("nombreEmpresa");
    this.empresaNombre = Nombre.toString();*/

    /* this.pais.id = 3;
     this.pais.nombre = "India";
     this.pais.cant_dias = 8;
     this.pais.precio = 972;
     this.pais.imagen = "algo";*/


    /* let pais_1: Pais = { id: 1, nombre: "India", cant_dias: 8, precio: 972, imagen: "algo" };
     let pais_2: Pais = { id: 2, nombre: "Nepal", cant_dias: 8, precio: 1000, imagen: "algo" };
     let pais_3: Pais = { id: 3, nombre: "Tailandia", cant_dias: 11, precio: 1175, imagen: "algo" };
     let pais_4: Pais = { id: 4, nombre: "Camboya", cant_dias: 3, precio: 690, imagen: "algo" };
     let pais_5: Pais = { id: 5, nombre: "Singapur", cant_dias: 3, precio: 470, imagen: "algo" };
     let pais_6: Pais = { id: 6, nombre: "Vietnam", cant_dias: 11, precio: 1290, imagen: "algo" };
     let pais_7: Pais = { id: 7, nombre: "Malasia", cant_dias: 7, precio: 1010, imagen: "algo" };
     let pais_8: Pais = { id: 8, nombre: "Indonesia", cant_dias: 9, precio: 935, imagen: "algo" };
     let pais_9: Pais = { id: 9, nombre: "Filipinas", cant_dias: 8, precio: 900, imagen: "algo" };
 
 
     this.paisesList = [
       { id: 1, nombre: "India", cant_dias: 8, precio: 972, imagen: "algo" },
       { id: 2, nombre: "Nepal", cant_dias: 8, precio: 1000, imagen: "algo" },
       { id: 3, nombre: "Tailandia", cant_dias: 11, precio: 1175, imagen: "algo" },
       { id: 4, nombre: "Camboya", cant_dias: 3, precio: 690, imagen: "algo" },
       { id: 5, nombre: "Singapur", cant_dias: 3, precio: 470, imagen: "algo" },
       { id: 6, nombre: "Vietnam", cant_dias: 11, precio: 1290, imagen: "algo" },
       { id: 7, nombre: "Malasia", cant_dias: 7, precio: 1010, imagen: "algo" },
       { id: 8, nombre: "Indonesia", cant_dias: 9, precio: 935, imagen: "algo" },
       { id: 9, nombre: "Filipinas", cant_dias: 8, precio: 900, imagen: "algo" }
     ];*/

    /* this.conexionList = [
       { id: 1, precio: -100, origen: pais_1, destino: pais_2 },
       { id: 2, precio: 100, origen: pais_2, destino: pais_3 },
       { id: 3, precio: -150, origen: pais_3, destino: pais_4 },
       { id: 4, precio: 0, origen: pais_4, destino: pais_5 },
       { id: 5, precio: 200, origen: pais_5, destino: pais_6 },
       { id: 6, precio: 0, origen: pais_6, destino: pais_7 },
       { id: 7, precio: 250, origen: pais_7, destino: pais_8 },
       { id: 8, precio: 350, origen: pais_8, destino: pais_9 }
 
     ];*/

    //paisesList.push(this.pais);

    //this.paises.push(this.pais);

    //this.paises.push({id: 1, nombre: "India", cant_dias:8, precio:972, imagen:"algo"});

    this.service.getPaises()
      .subscribe(data => {
        console.log(data);
        this.dataSource = data;
        this.paisesList = data['data'];
        this.paises = data;

        // console.log("VALOR:" + this.paisesList[0].nombre);
      })

    this.serviceConexion.getConexiones()
      .subscribe(data => {
        console.log(data);
        this.conexionList = data['data'];
      })

  }


  selectionChangen(event: StepperSelectionEvent) {
    this.stepSelected = event;
    this.stepActivo = event.selectedStep;

    //console.log(this.paisesList);
    //console.log(this.conexionList);
  }

  click(event: StepperSelectionEvent) {
    //this.stepper;
    //console.log("CLICKED STEP 2")
    this.stepSelected = event;
    this.stepPartida = event.selectedStep;
    //console.log(event.selectedStep.label);

  }

  completeStep() {

    if (typeof this.stepSelected === "undefined") {
      // console.log("VALOR (PRIMER) INDEX: ");
      this.step1completed = true;
      //this.completed = true;

    } else {

      this.stepPartida = this.stepActivo;
      if (this.stepSelected.selectedIndex == 0) {
        // console.log("VALOR  INDEX 0: ");

        this.stepPartida.completed = true;
        this.stepPartida.state = "iconPartida";
        this.stepSelected.selectedIndex;
        // console.log("VALOR INDEX: " + this.stepSelected.selectedIndex);
        this.destino = true;

      } else {
        this.step1completed = false;

        this.stepPartida.completed = true;
        this.stepPartida.state = "iconPartida";
        this.stepSelected.selectedIndex;
        //this.stepActive.select;
        //console.log("VALOR INDEX: " + this.stepSelected.selectedIndex);
        this.destino = true;

      }
      return (this.partida = false);
    }

  }

  clickDestino() {
    this.stepDestino = this.stepActivo;

    this.stepDestino.completed = true;
    this.stepDestino.state = "iconDestino";
    this.stepDestino.editable = false;

    this.partida = false;

    //console.log("Partida Id: " + this.paises);
    let paisPartida = this.paisesList.find(x => x.nombre == this.stepPartida.label);
    let paisDestino = this.paisesList.find(x => x.nombre == this.stepDestino.label);

    //console.log("Partida Id: " + paisPartida.id + " Destino Id: " + paisDestino.id);
    //console.log("Partida: " + paisPartida.nombre + " Destino: " + paisDestino.nombre);

    this.paisPartida = paisPartida.nombre.toString();
    this.paisDestino = paisDestino.nombre.toString();

    this.listaPaisesViaje(paisPartida.id, paisDestino.id);
    this.listaConexiones();

    this.calcularPrecioViaje();
    this.calcularPrecioConexiones();

    this.precio_total = this.precioPaises + this.precioConexiones + this.tarifaViaje;
    this.dias_total = this.diasPaises + this.diasViaje;

    /*console.log("Precio Viaje: " + this.precioPaises +
      " Precio Conexion: " + this.precioConexiones +
      "Total: " + this.precio_total + " Cantidad de Dias: " + this.dias_total);*/

    return (this.destino = false);
  }

  calcularPrecioViaje() {
    let precio: number = 0;
    let dias: number = 0;

    for (let i = 0; i < this.paisesListViaje.length; i++) {
      precio += this.paisesListViaje[i].precio;
      dias += this.paisesListViaje[i].cant_dias;
    }
    this.precioPaises = precio;
    this.diasPaises = dias;

  }

  calcularPrecioConexiones() {
    let precio: number = 0;
    for (let i = 0; i < this.conexiones.length; i++) {

      //console.log("CONEXIONES: " + this.conexiones[i]);
      precio += this.conexiones[i].precio;
    }
    this.precioConexiones = precio;
  }

  listaPaisesViaje(id_partida: number, id_destino: number) {
    let arrayPaises: Array<Pais>;
    for (let i = id_partida - 1; i <= id_destino - 1; i++) {
      //arrayPaises.push(this.paisesList[i]);
      let pais: Pais = {
        id: this.paisesList[i].id,
        nombre: this.paisesList[i].nombre,
        cant_dias: this.paisesList[i].cant_dias,
        precio: this.paisesList[i].precio,
        imagen: this.paisesList[i].imagen
      };

      // console.log("Paises VIAJE: " + this.paisesList[i].nombre);
      this.paisesListViaje.push(pais);
    }
  }

  listaConexiones() {

    for (let i = 0; i < this.paisesListViaje.length; i++) {
      let pais1: Pais = this.paisesListViaje[i];
      let pais2: Pais = this.paisesListViaje[i + 1];
      let con: Conexion;

      if (pais2) {
        con = this.buscarConexionPorPaises(pais1, pais2);
        this.conexiones.push(con);
        // console.log("CONEXION Pais1: " + pais1.nombre + " Pais 2: " + pais2.nombre);
        //console.log("CONEXION: " + con[0]);
      }

    };

  }

  buscarConexionPorPaises(pais1: Pais, pais2: Pais) {
    let con: Conexion;
    for (let i = 0; i < this.conexionList.length; i++) {
      if (this.conexionList[i].origen.id == pais1.id && this.conexionList[i].destino.id == pais2.id) {
        // console.log("CONEXION Pais1: " + this.conexionList[i].origen.id + " Pais 2: " + this.conexionList[i].destino.id);
        con = this.conexionList[i];
      }
    };
    return con;
  }


}
