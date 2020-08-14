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
        desc : '<p>Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps. For more information - <a href="https://angular.io/" target="_blank">angular.io</a></p>' ,
        portfolio: [
          {title: 'Recipe App', url: 'https://aralovesbaking.web.app'}
        ]
      },
      { name : 'js',
        title : 'Javascript',
        desc : '<p>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node. js, Apache CouchDB and Adobe Acrobat. For more information - <a href="https://javascript.info/" target="_blank">javascript.info</a> </p>',
      },
      { name : 'laravel',
        title : 'Laravel',
        desc : '<p>Laravel is a web application framework with expressive, elegant syntax. For more information - <a href="https://laravel.com/" target="_blank">Laravel.com</a></p>'
      },
      { name : 'php',
        title : 'PHP/MySQL',
        desc : '<p>PHP is a popular general-purpose scripting language that is especially suited to web development.</p>' +
          '<p>MySQL is an open-source relational database management system. ' +
          'For more information - <a href="https://www.php.net/" target="_blank">php.net</a> and <a href="https://www.mysql.com/" target="_blank">mysql.com</a> </p>' +
          '<p>I have more than 10 years experience in using PHP and that includes the following CMS/Framework:' +
          '<li>WordPress</li>' +
          '<li>CakePHP</li>' +
          '<li>Laravel</li>' +
          '<li>OpenCart</li>' +
          'And other CMS that are not in the market anymore</p>'
      },
      { name : 'react',
        title : 'React',
        desc: '<a>React is an open-source JavaScript library for building user interfaces or UI components. For more information - <a href="https://reactjs.org/" target="_blank">reactjs.org</a></p>',
        portfolio: [
          { title: 'Simple Trello App', url: 'https://aralovelace.github.io/my-simple-trello/' }
        ]
      },
      { name : 'bootstrap',
        title : 'Bootstrap',
        desc: '<p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. For more information - <a href="https://getbootstrap.com/" target="_blank">getbootstrap.com</a></p>',
      },
      { name : 'html',
        title : 'HTML5 & CSS3',
        desc: '<p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web. </p>' +
          '<p>CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.</p>',
      },
      { name : 'ts',
        title : 'Typescript',
        desc: '<p>TypeScript extends JavaScript by adding types to the language. For more information - <a href="https://www.typescriptlang.org/" target="_blank">typescriptlang.org</a></p>',
      },
      { name : 'docker',
        title : 'Docker',
        desc: '<p>Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. For more information - <a href="https://www.docker.com/" target="_blank">docker.com</a></p>'
      },
      { name : 'git',
        title : 'Git Version Control',
        desc: '<p>Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. For more information - <a href="https://git-scm.com/" target="_blank">git-scm.com</a></p>',
      },
      { name : 'firebase',
        title : 'Firebase',
        desc: 'Firebase is a platform for creating mobile and web applications developed by Google. For more information - <a href="https://firebase.google.com/" target="_blank">firebase.google.com</a>',
      },
      { name : 'scrum',
        title : 'Scrum - Agile Methodology',
        desc: '<p>Scrum is an agile framework for developing, delivering, and sustaining complex products, with an initial emphasis on software development, although it has been used in other fields including research, sales, marketing and advanced technologies.</p>' +
          '<p>Completed and certified Scrum Master - <a href="http://bcert.me/suuicspxu" target="_blank">Certified ScrumMaster Badge</a></p>',
      }
    ];


  }

}
