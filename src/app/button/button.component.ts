import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'arch-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Input() public label: string = '';

  constructor() { }

  ngOnInit() {
  }

}
