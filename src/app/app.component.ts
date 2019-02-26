import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TOOLS } from './tools-list'
import { ALTTOOL } from './tools-list'
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  /* Web App Info */
  title = 'DevOps Dashboard'
  navbarTitle = 'DevOps Platform'
  description = 'This platform can be used for demos, training, and to start real projects.'
  dragHelp = "Click 'Edit' on the top right hand corner, drag tools from the sidebar, then drop them below. Hit 'Start' to begin."

  /* Edit/Cancel Button */
  public shouldShow = true;
  public editButton: string = 'Edit';
  public changeText(): void {
    if(this.editButton === 'Edit') { 
      this.editButton = 'Cancel'
    } else {
      this.editButton = 'Edit'
    }
  }

  public generateJSON(): void {
    var jsonArr = [];
    for (var id = 0; id < 9; id++) {
      jsonArr.push({
          ID: id,
          TOOLS: document.getElementById("selectedTool").innerHTML
      });
    console.log(jsonArr)
  }
  };

  /* Data */
  tools = TOOLS;
  altTools = ALTTOOL;

  /* Drop Events for CDK Drag and Drop */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
    }
  };

  /* Required */
  constructor() { }

  ngOnInit() {
  }
}