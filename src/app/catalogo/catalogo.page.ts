import { Component, OnInit } from '@angular/core';


interface Producto {
  
  id: string,
  nombre: string,
  desc:string,
  precio: number,
  disp: number,
  img:string




}

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  catalogo: Producto[] =[

    {
      id:"1",
      nombre:"Producto 1",
      desc:"Autazo",
      precio: 25000000,
      disp: 1,
      img: "https://th.bing.com/th/id/OIP.Gko1GvsidaYpfE68yjzq2gHaFj?pid=ImgDet&rs=1"
    },  
    {
      id:"2",
      nombre:"Producto 2",
      desc:"Autazo",
      precio: 25000000,
      disp: 1,
      img: "https://th.bing.com/th/id/OIP.Gko1GvsidaYpfE68yjzq2gHaFj?pid=ImgDet&rs=1"
    }
    

  ]



  constructor() { }

  ngOnInit() {
  }

}
