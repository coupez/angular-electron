import { Component, OnInit } from '@angular/core';
import * as noble from 'noble';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works !`;
  count = 0;

  constructor() { }

  ngOnInit() {
    noble.on('stateChange', state => {
      if (state !== 'poweredOn') return;

      noble.startScanning();
      noble.on('discover', (peripheral) => {
        console.log('discovered', peripheral)
        this.count += 1;
      });
    })
  }

}
