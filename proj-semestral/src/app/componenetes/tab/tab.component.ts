import { Component, OnInit } from '@angular/core';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs],
})
export class TabComponent  implements OnInit {

  constructor() { 

    addIcons({ library, playCircle, radio, search });

  }
  

  ngOnInit() {}

}
