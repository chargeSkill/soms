import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnInit {
  @Input()
  public item;

  constructor() { }

  ngOnInit() {
    console.log(this.item)
  }

}
