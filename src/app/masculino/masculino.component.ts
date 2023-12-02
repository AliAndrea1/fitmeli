import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { galeriaImages } from '../data-type';

@Component({
  selector: 'app-masculino',
  templateUrl: './masculino.component.html',
  styleUrls: ['./masculino.component.css'],
})
export class MasculinoComponent implements OnInit {
  images!: galeriaImages[];
  constructor(private produtos: ProdutosService) {}

  ngOnInit() {
    this.produtos.getImages('masculina').then((images) => {
      console.log(JSON.stringify(images));
      this.images = images;
    });
  }
}
