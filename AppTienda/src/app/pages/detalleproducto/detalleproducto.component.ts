import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SproductosService } from '../../services/sproductos.service';
import { ProcedureParam } from '../../models/procedureparam';
import { ProductosModel } from '../../models/productos.models';


@Component({
  selector: 'app-cardproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {
  parametros: ProcedureParam = new ProcedureParam();
  producto: any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private _sproductosService: SproductosService) { }

  ngOnInit(): void {
    this.parametros.inicia();
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '0'; //consultar ingeniero
    // para recuperar por un id
    this.parametros.pCampo0 = 'Cidproducto';
    this.parametros.pValor0 = id;

    this._sproductosService.selProductos(this.parametros).subscribe((resp: any) => {
      this.producto = resp[0];
      //console.log(resp);
      //console.log(this.producto);

    });
    this.producto='';
    console.log(this.producto);
  }
}

