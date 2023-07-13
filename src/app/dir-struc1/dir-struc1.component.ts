import { Component } from '@angular/core';

@Component({
  selector: 'app-dir-struc1',
  templateUrl: './dir-struc1.component.html',
  styleUrls: ['./dir-struc1.component.css']
})
export class DirStruc1Component {
    title = 'List of Games';

    games = [
      'Volleyball',
      'Football',
      'Basketball',
      'Cricket',           //structural directives array
      'Hockey'
    ]
}
