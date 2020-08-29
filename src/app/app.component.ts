import { Component } from '@angular/core';

interface foo {
  bar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public firstName: string = 'James';
  public lastName: string = 'Bond';
  public foobar: foo = {
    bar: '42',
  };
}
