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
      { name : 'angular',
        title : 'Angular',
        desc : '<p>Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.</p>' +
          '<p>I have more than a year experience working with Angular Framework, I used Angular for work and for my personal projects. I also completed a Udemy course to fully use this framework </p>',
        portfolio: [
          {title: 'Recipe App', url: 'https://aralovesbaking.web.app'}
        ]
      },
      { name : 'js',
        title : 'Javascript',
        desc : 'Can code vanillaJS and knowlesge on ES6',
      },
      { name : 'laravel',
        title : 'Laravel',
        desc : '3 years experience of using Laravel Framework'
      },
      { name : 'php',
        title : 'PHP/MySQL',
        desc : 'More than 10 years experience using PHP'
      },
      { name : 'react',
        title : 'React',
        desc: 'New to react, I learn react by coding some personal projects I made',
        portfolio: [
          { title: 'Simple Trello App', url: 'https://aralovelace.github.io/my-simple-trello/' }
        ]
      },
      { name : 'bootstrap',
        title : 'Bootstrap',
        desc: '',
      },
      { name : 'html',
        title : 'HTML5 & CSS3',
        desc: '',
      },
      { name : 'ts',
        title : 'Typescript',
        desc: '',
      },
      { name : 'docker',
        title : 'Docker'
      },
      { name : 'git',
        title : 'Git Version Control',
        desc: '',
      },
      { name : 'firebase',
        title : 'Firebase',
        desc: '',
      },
      { name : 'scrum',
        title : 'Scrum - Agile Methodology',
        desc: '',
      }
    ];


  }

}
