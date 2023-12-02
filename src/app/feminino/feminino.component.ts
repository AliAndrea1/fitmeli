import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { galeriaImages } from '../data-type';

@Component({
  selector: 'app-feminino',
  templateUrl: './feminino.component.html',
  styleUrls: ['./feminino.component.css'],
})
export class FemininoComponent implements OnInit {
  images!: galeriaImages[];
  constructor(private produtos: ProdutosService) {}

  ngOnInit() {
    this.produtos.getImages('feminina').then((images) => {
      console.log(JSON.stringify(images));
      this.images = images;
    });
  }
}
