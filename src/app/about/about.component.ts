import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {

   image= [
    {  'url': './assets/images/image1.JPG'},
    {  'url': './assets/images/image2.jpg'},
    {  'url': './assets/images/image3.PNG'},
    {  'url': './assets/images/image4.png'},
    {  'url': './assets/images/image5.JPEG'}

  ];

  // tslint:disable-next-line:member-ordering


}
