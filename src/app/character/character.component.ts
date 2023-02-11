import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RickAndMorty } from '../models/rick.model';
import { CharacterService } from '../_services/character.service';
import { RickService } from '../_services/rick.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  currentUser: any;
  isLoggedIn = false;
  characters?: RickAndMorty[];
  currentIndex = -1;
  currentCharacter: RickAndMorty = {};
  name: string = '';

  comment: string = '';
  score: number = 0;

  constructor(private rickService: RickService, private characterService: CharacterService, private storageService: StorageService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.currentUser = this.storageService.getUser();
    this.rickService.getCharacters().subscribe({
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

  setActiveCharacter(tutorial: RickAndMorty, index: number, content: any): void {
    this.currentCharacter = tutorial;
    this.currentIndex = index;
    this.open(content);
  }

  searchName(): void {
    this.currentCharacter = {};
    this.currentIndex = -1;

    this.rickService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.characters = data.data;
        },
        error: (e) => console.error(e)
      });
  }


  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {

        if (result === 'save') {
          const c = this.currentCharacter;
          if (c.id && c.name) {
            this.characterService.saveCharacter(this.currentUser._id, c.id, c.name, c.image || '', this.comment, Number(this.score)).subscribe({
              next: (data) => {
                console.log(data);
              },
              error: (e) => console.error(e)
            });
          }
        }
      },
      // (reason) => {
      //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      // },
    );
  }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
