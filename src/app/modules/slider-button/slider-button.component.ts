import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.scss'],
})
export class SliderButtonComponent implements OnInit {

  @Input() buttons: string[];
  @Input() color = 'primary';
  @Input() mode: 'ios' | 'md' = 'ios';

  widthButton = 1000;

  constructor() {}

  ngOnInit() {
    if (this.buttons.length > 0) {
      this.buttons.forEach(button => {
        this.widthButton += button.length * 3;
      });
    }
  }

}
