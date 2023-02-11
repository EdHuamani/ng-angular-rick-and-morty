import { Component, OnInit } from '@angular/core';
import { RickAndMorty } from '../models/rick.model';
import { RickService } from '../_services/rick.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters?: RickAndMorty[];
  currentIndex = -1;
  currentCharacter: RickAndMorty = {};
  name = '';


  constructor(private rickService: RickService) { }

  ngOnInit(): void {


  }

}
