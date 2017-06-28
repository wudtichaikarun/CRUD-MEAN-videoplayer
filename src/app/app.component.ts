import { Component } from '@angular/core';
import {ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from 'angular2-bootstrap-confirm/position';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ 
    ConfirmOptions,
    {provide: Position, useClass: Positioning}
  ]
})
export class AppComponent {
    //config confirm property
  public title: string = 'Confirm Delete';
  public message: string = 'Are you sure! to delete?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  public isOpen: boolean = false;

}
