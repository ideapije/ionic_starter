import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Slide } from '../modules/slider-memo/slider-memo.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slides: Slide[] = [
    {
      title: 'Welcome to the Docs!',
      description: 'The Ionic Component Documentation showcases a number of useful.',
      author: 'ionicframework'
    },
    {
      title: 'What is Ionic?',
      description: 'Ionic is an open source SDK that enables developers to build high.',
      author: 'ionicframework',
    },
    {
      title: 'What is Ionic Cloud?',
      description: 'The Ionic Cloud is a cloud platform for managing and scaling Ionic apps.',
      author: 'ionicframework',
    },
  ];
  buttons = ['Semua', 'To Do', 'Done', 'Cancel', 'On Progress', 'On Review', 'On Approve', 'On Reject'];
  segmentA = 'tugas_for';

  constructor(translate: TranslateService) {
    translate.use('id');
  }

  segmentChanged(event: any) {
    console.log('Segment changed', event);
    const data = event?.detail?.value;
    this.segmentA = (typeof data !== 'undefined') ? data : 'tugas_for';
  }

}
