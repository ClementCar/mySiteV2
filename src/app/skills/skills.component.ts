import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [`
  /* :host >>> progress[value].progress-custom::-webkit-progress-value{
    background-color:red;
  } */
  `
  ]
})
export class SkillsComponent implements OnInit {
  height: string = '40px';

  constructor() { }

  ngOnInit(): void {
  }

}
