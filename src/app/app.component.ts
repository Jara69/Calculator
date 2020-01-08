import { Component } from '@angular/core';
import { removeSummaryDuplicates } from '@angular/compiler';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  result: any = '';

  null() {
    this.result += 0;
  }
  one() {
    this.result += 1;
  }
  two() {
    this.result += 2;
  }
  three() {
    this.result += 3;
  }
  four() {
    this.result += 4;
  }
  five() {
    this.result += 5;
  }
  six() {
    this.result += 6;
  }
  seven() {
    this.result += 7;
  }
  eight() {
    this.result += 8;
  }
  nine() {
    this.result += 9;
  }

  minus() {
    this.result += '-';
  }
  plus() {
    this.result += '+';
  }

  divide() {
    this.result += '/';
  }

  times() {
    this.result += '*';
  }



  vysledek() {
    const expression = this.result;
    // tslint:disable-next-line:no-eval
    this.result = eval(expression.toString());
  }



}





