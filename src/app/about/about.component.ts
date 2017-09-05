import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {

   image= [
    {  'url': './assets/images/image1.JPG'},
    {  'url': './assets/images/image2.png'},
    {  'url': './assets/images/image3.PNG'},
    {  'url': './assets/images/image4.JPEG'},
    {  'url': './assets/images/image5.jpg'}

  ];

  // tslint:disable-next-line:member-ordering


}
