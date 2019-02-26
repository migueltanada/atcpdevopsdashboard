import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Tool, altTool } from './tools'
import { TOOLS } from './tools-list'
import { ALTTOOL } from './tools-list'
import { disableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /* Info */
  title = 'DevOps Dashboard';
  navbarTitle = 'DevOps Platform'
  /* Edit Button */
  public shouldShow = true;
  public editButton: string = 'Edit';
  public changeText(): void {
    if(this.editButton === 'Edit') { 
      this.editButton = 'Cancel'
    } else {
      this.editButton = 'Edit'
    }
  }
  
  /* Tools */
  gitlab = {
    toolName: 'GitLab',
    toolDesc: 'Git Repository and Management and Code Review',
    toolImage: 'imgURL'
  }
  jenkins = [
    'Jenkins',
    'CI Automation and Server',
    'imgURL',
  ]
  sonarqube = [
    'SonarQube',
    'Static Code Analysis',
    'imgURL',
  ]
  gerrit = [
    'Gerrit',
    'Code Review',
    'imgURL',
  ]
  sensu = [
    'Sensu',
    'Monitoring',
    'imgURL',
  ]
  nexus = [
    'Nexus',
    'Software Repository Manager',
    'imgURL',
  ]
  prometheusgrafana = [
    'prometheusgrafana',
    'Monitoring',
    'imgURL',
  ]
  elk = [
    'ELK Stack',
    'Logging and Data Visualization',
    'imgURL'
  ]
  selenium = {
    'toolName': 'Selenium',
    'toolDesc': 'Selenium Grid for Automated Testing',
    'toolimgURL' :'imgURL'
  }


  /* Tools List */
  devopsTools = [
    this.gitlab.toolName,
    this.jenkins[0],
    this.sonarqube[0],
    this.gerrit[0],
    this.sensu[0],
    this.nexus[0],
    this.prometheusgrafana[0],
    this.elk[0],
    this.selenium.toolName
  ];

  // tool: Tool = {
  //   id: 1,
  //   name: 'GitLab',
  //   description: 'Git Repository and Management and Code Review', 
  //   logoUrl: '../assets/img/gitlab.png'
  // };

  tools = TOOLS;
  altTools = ALTTOOL;

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.devopsTools, event.previousIndex, event.currentIndex);
  // };

  altedevopsTools = [
    'Dropped Item'
    ];

    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      }
    }
    
    constructor() { }

    ngOnInit() {
    }
}

function showInfo() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}