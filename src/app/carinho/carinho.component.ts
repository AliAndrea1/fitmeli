import { Component, OnInit } from '@angular/core';
import { galeriaImages } from '../data-type';
import { ComprarService } from '../compra/comprar.service';

@Component({
  selector: 'app-carinho',
  templateUrl: './carinho.component.html',
  styleUrls: ['./carinho.component.css'],
})
export class CarinhoComponent implements OnInit {
  showMesage: boolean = true;
  images!: galeriaImages[];
  count: number = 0;
  total: number | undefined;

  constructor(private compra: ComprarService) {}
  ngOnInit() {
    this.compra.GetAllCart().subscribe((resp) => {
      this.showMesage = false;
      this.count = resp.length;
      this.images = resp;
      this.calcularTotal();
    });
    /*  let dados = localStorage.getItem('cart');
    if (dados) {
      this.showMesage = false;
      let arrayDados = JSON.parse(dados);
      this.count = arrayDados.length;
      this.products = arrayDados;
    } */
  }

  calcularTotal() {
    let total = 0;
    for (let item of this.images) {
      total += parseFloat(item.price);
    }

    this.total = total;
  }
}
