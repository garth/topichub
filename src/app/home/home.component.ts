import { Component } from '@angular/core'
import { Store } from '../../overmind'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private store: Store) {}

  state = this.store.select()
}
