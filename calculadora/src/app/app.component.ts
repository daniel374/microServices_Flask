import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

subText = ''; // texto en segundo display
mainText = ''; // texto en el primer display
operand1: number; // primer operando
operand2: number; // segundo operando
operator = ''; // operador
calculationString = ''; 
answered = false; //bandera para saber si la operación se proceso
operatorSet = false; 


pressKey(key: string) {
  if(this.answered)
  {
    this.allClear();
    this.answered=false;
  }
  if (key === '/' || key === 'x' || key === '-' || key === '+') {
     const lastKey = this.mainText[this.mainText.length - 1];
     if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')  {
       this.operatorSet = true;
     }
     if ((this.operatorSet) || (this.mainText === '')) {
       return;
     }
     this.operand1 = parseFloat(this.mainText);
     this.operator = key;
     this.operatorSet = true;
  }
  if (this.mainText.length === 10) {
    return;
  }
  this.mainText += key;
}

getAnswer() {
  this.calculationString = this.mainText;
  this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
  if (this.operator === '/') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 / this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = this.mainText.substr(0, 9);
    }
  } else if (this.operator === 'x') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 * this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Range Exceeded';
    }
  } else if (this.operator === '-') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 - this.operand2).toString();
    this.subText = this.calculationString;
  } else if (this.operator === '+') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 + this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Range Exceeded';
    }
  } else {
    this.subText = 'ERROR: Invalid Operation';
  }
  this.answered = true;
}
allClear(){
  this.mainText="";
  this.subText="";
  this.operand1=undefined;
  this.operand2=undefined;
  this.operator = ''; 
  this.calculationString = ''; 
  this.answered = false; //bandera para saber si la operación se proceso
  this.operatorSet = false; 
  }
}
