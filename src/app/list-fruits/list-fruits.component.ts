import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-list-fruits',
  templateUrl: './list-fruits.component.html',
  styleUrls: ['./list-fruits.component.css']
})
export class ListFruitsComponent implements OnInit {
  @Input() fruits: Fruit[];

  constructor() {}

  ngOnInit() {}
  // method to see if CD is apply
  check() {
    console.log('Check from ListFruitsComponent');
  }
  fakeMethod() {}
}
