import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {

   image= [
    {  'url': './assets/images/image1.jpg'},
    {  'url': './assets/images/image2.jpg'},
    {  'url': './assets/images/image3.jpg'},
    {  'url': './assets/images/image4.jpg'},
    {  'url': './assets/images/image5.jpg'}

  ];

  // tslint:disable-next-line:member-ordering


}
