import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

export interface Slide {
  title: string;
  description: string;
  author: string;
};

@Component({
  selector: 'app-slider-memo',
  templateUrl: './slider-memo.component.html',
  styleUrls: ['./slider-memo.component.scss'],
})
export class SliderMemoComponent implements OnInit {

  @Input() slides: Slide[];

  widthSupreme = 0;

  constructor(
    private platform: Platform
  ) {}

  descriptionSLide(text: string) {
    const titik = (text.length > 24) ? '...' : '';
    return text.substring(0, 24) + titik;
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.widthSupreme = this.platform.width();
    });
  }

}
