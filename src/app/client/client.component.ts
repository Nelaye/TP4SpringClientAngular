import { Component, OnInit } from '@angular/core';
import {Jeu} from '../jeu';
import {JeuService} from '../service/jeu.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  jeux: Jeu[];

  constructor(private jeuService: JeuService) { }

  ngOnInit(): void {
    this.jeuService.findAll().subscribe(data => {
      this.jeux = data;
    });
  }

}
