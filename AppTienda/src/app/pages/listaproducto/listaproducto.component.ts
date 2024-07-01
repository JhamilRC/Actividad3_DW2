import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProcedureParam } from '../../models/procedureparam';
import { SproductosService } from '../../services/sproductos.service';

@Component({
  selector: 'app-listaproducto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listaproducto.component.html',
  styleUrl: './listaproducto.component.css'
})
export class ListaproductoComponent implements OnInit {
  procedureParam: ProcedureParam = new ProcedureParam();
  productos: any[] = [];
  constructor(private sproducto: SproductosService) { }
  ngOnInit(): void {
    this.procedureParam.inicia();
    // this.procedureParam.pCampo0='Cnombre';
    // this.procedureParam.pValor0='a';
    console.log('1');
    this.sproducto.selProductos(this.procedureParam)
      .subscribe((resp: any) => {
        this.productos = resp;

      });
      
  }
  getImagePath(): string {
    return `../../img/unnamed.png`;
  }
}
