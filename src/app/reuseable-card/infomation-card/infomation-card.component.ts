import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infomation-card',
  templateUrl: './infomation-card.component.html',
  styleUrls: ['./infomation-card.component.css'],
})
export class InfomationCardComponent implements OnInit {
  @Input()
  public card: any;

  constructor() {}

  ngOnInit(): void {}
}
