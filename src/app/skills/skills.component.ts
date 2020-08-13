import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [];
  title = 'Skills';

  constructor() { }

  ngOnInit(): void {
    this.skills = [
      'angular',
      'js',
      'laravel',
      'php',
      'react',
      'bootstrap'
    ];


  }

}
