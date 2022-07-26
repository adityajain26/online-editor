import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @Output() openEditor = new EventEmitter();
  @Output() navTo = new EventEmitter();
  @Output() navToLex = new EventEmitter();
  // @Input() data: any;
  data: any = '{"stats":{"snippets":[{"library":"Angular","private":200,"public":200},{"library":"React","private":200,"public":200},{"library":"FEWD","private":200,"public":200},{"library":"Node.js","private":200,"public":200}],"users":1378,"projects":3,"hours":600}}';
  
  editorInfo: any;
  angularInfo: any;
  reactInfo: any;
  fewdInfo: any;
  nodeInfo: any;
  users: any;
  hours: any;
  projects: any;
  flagBtn: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.data = JSON.parse(this.data);
    this.users = this.data.stats.users;
    this.hours = this.data.stats.hours;
    this.projects = this.data.stats.projects;
    this.editorInfo = this.data.stats.snippets;
    for (let i = 0; i < this.editorInfo.length; i++) {
      if (this.editorInfo[i].library == 'Angular') {
        this.angularInfo = this.editorInfo[i];
      } else if (this.editorInfo[i].library == 'React') {
        this.reactInfo = this.editorInfo[i];
      } else if (this.editorInfo[i].library == 'FEWD') {
        this.fewdInfo = this.editorInfo[i];
      } else if (this.editorInfo[i].library == 'Node.js') {
        this.nodeInfo = this.editorInfo[i];
      }
    }
  }

  triggerbtnOpen() {
    this.flagBtn = true;
  };

  triggerbtnClose() {
    this.flagBtn = false;
  };

  runCode(language: string) {
    if (language == 'angular') {
      this.openEditor.emit('Angular');
    } else if (language == 'fewd') {
      this.openEditor.emit('FEWD');
    } else if (language == 'react') {
      this.openEditor.emit('React');
    } else if (language == 'nodejs') {
      this.openEditor.emit('Node.js');
    }
  }

  navigateTo(route: string) {
    if (route == 'private') {
      this.navTo.emit('PRIVATE');
    } else if (route == 'public') {
      this.navTo.emit('PUBLIC');
    } else if (route == 'dashboard') {
      this.navTo.emit('DASHBOARD');
    }
  }

  navigateToLex() {
    this.navToLex.emit();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}