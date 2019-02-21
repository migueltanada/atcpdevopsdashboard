import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevOps Dashboard';
  navbarTitle = 'DevOps Platform'
  public shouldShow = true;
  public editButton: string = 'Edit';
  public changeText(): void {
    if(this.editButton === 'Edit') { 
      this.editButton = 'Save'
    } else {
      this.editButton = 'Edit'
    }
  }
}
