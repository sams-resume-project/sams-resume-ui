import { Component } from '@angular/core';

interface Foo {
  bar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public firstName = 'James';
  public lastName = 'Bond';
  public foobar: Foo = {
    bar: '42',
  };
}
