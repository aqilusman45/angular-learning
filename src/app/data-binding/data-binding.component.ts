import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  title = 'Property Binding';
  imgUrl = 'https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto/gigs/120147013/original/410a788dc5cce88d076b582ed4d029e3c232cde7/be-your-website-seo-content-writer.png';
  constructor() {
   }

  ngOnInit() {
  }

}
