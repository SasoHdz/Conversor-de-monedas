import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  cantidad: number = 0;
  tengo: string = "USD";
  quiero: string = "EUR";
  total: number = 0;
  monedas: string[] = ['USD','EUR','LIBRA']

  converUSD:any = {
    'USD': 1,
    'EUR': 0.84,
    'LIBRA': 0.75
  }

  converEUR:any = {
    'USD': 1,
    'EUR': 0.84,
    'LIBRA': 0.75
  }

  constructor()
  {

  }

  ngOnInit():void {

  }

  convertir():void {
    switch(this.tengo){
      case 'USD':
        this.total = this.converUSD[this.quiero] * this.cantidad;
        break;
      case 'EUR':

        break;
    }
  }
}
