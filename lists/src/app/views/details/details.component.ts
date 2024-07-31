import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../../assets/products';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  id = '';
  foundProduct: Product = {
    _id: '',
    title: '',
    description: '',
    stock: 0,
    price: 0,
    images: [''],
    colors: [''],
    onsale: false,
  };
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('pid') || '';
    });
    this.foundProduct = products.find((each) => each._id === this.id) || {
      _id: '',
      title: '',
      description: '',
      stock: 0,
      price: 0,
      images: [''],
      colors: [''],
      onsale: false,
    };
  }

}
