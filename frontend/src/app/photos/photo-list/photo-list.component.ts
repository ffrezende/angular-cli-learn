import { Component, OnInit } from '@angular/core';

import { PhotoService } from  '../photo/pthoto.service'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void{
    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => {
        this.photos = photos
      });
  }

}
