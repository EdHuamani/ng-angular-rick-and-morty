import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RickAndMorty } from '../models/rick.model';
import { CharacterService } from '../_services/character.service';
import { StorageService } from '../_services/storage.service';
@Component({
  selector: 'app-my-character',
  templateUrl: './mycharacter.component.html',
  styleUrls: ['./mycharacter.component.css']
})
export class MycharacterComponent implements OnInit {
  currentUser: any;
  isLoggedIn = false;
  characters?: RickAndMorty[];
  currentIndex = -1;
  currentCharacter: RickAndMorty = {};
  name = '';


  constructor(private characterService: CharacterService, private storageService: StorageService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.currentUser = this.storageService.getUser();

    this.characterService.getMyCharacters(this.currentUser._id).subscribe({
      next: data => {
        this.characters = data.data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.characters = res.message;
          } catch {
            this.characters = [];
          }
        } else {
          this.characters = [];
        }
      }
    });
  }

  setActiveCharacter(tutorial: RickAndMorty, index: number): void {
    this.currentCharacter = tutorial;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentCharacter = {};
    this.currentIndex = -1;

    this.characterService.findByName(this.currentUser._id, this.name)
      .subscribe({
        next: (data) => {
          this.characters = data.data;
        },
        error: (e) => console.error(e)
      });
  }

}
