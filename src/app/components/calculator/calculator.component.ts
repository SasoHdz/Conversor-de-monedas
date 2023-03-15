import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  cantidad: number = 0;
  tengo: string = 'USD';
  quiero: string = 'EUR';
  total: number = 0;
  monedas: string[] = [
    'USD',
    'EUR',
    'LIBRA ESTERLINA',
    'PESO ARG',
    'PESO CHILENO',
    'PESO COLOMBIANO',
    'PESO MEXICANO',
    'DOLAR AUSTRALIANO',
    'DOLAR BELICE',
    'RUBLO RUSIA',
  ];

  svgs: any = {
    'USD':'../../../assets/image/usd.svg',
    'EUR':'../../../assets/image/eur.svg',
    'LIBRA ESTERLINA':'../../../assets/image/libra.svg',
    'PESO ARG':'../../../assets/image/arg.svg',
    'PESO CHILENO':'../../../assets/image/chile.svg',
    'PESO COLOMBIANO':'../../../assets/image/col.svg',
    'PESO MEXICANO':'../../../assets/image/mex.svg',
    'DOLAR AUSTRALIANO':'../../../assets/image/aus.svg',
    'DOLAR BELICE':'../../../assets/image/be.svg',
    'RUBLO RUSIA':'../../../assets/image/rus.svg',
};

  converUSD: any = {
    'USD': 1,
    'EUR': 0.94,
    'LIBRA ESTERLINA': 0.75,
    'PESO ARG': 202.13,
    'PESO CHILENO': 808.25,
    'PESO COLOMBIANO': 4826,
    'PESO MEXICANO': 19.03,
    'DOLAR AUSTRALIANO': 1.51,
    'DOLAR BELICE': 2.01,
    'RUBLO RUSIA': 76.3,
  };

  converEUR: any = {
    'USD': 1.06,
    'EUR': 1,
    'LIBRA ESTERLINA': 0.87,
    'PESO ARG': 214.28,
    'PESO CHILENO': 871,
    'PESO COLOMBIANO': 5121,
    'PESO MEXICANO': 20.06,
    'DOLAR AUSTRALIANO': 1.6,
    'DOLAR BELICE': 2.12,
    'RUBLO RUSIA': 80.5,
  };

  converLibra: any = {
    'USD': 1.207,
    'EUR': 1.1407,
    'LIBRA ESTERLINA': 1,
    'PESO ARG': 244.51,
    'PESO CHILENO': 993.67,
    'PESO COLOMBIANO': 5895.67,
    'PESO MEXICANO': 22.867,
    'DOLAR AUSTRALIANO': 1.824,
    'DOLAR BELICE': 2.424,
    'RUBLO RUSIA': 92.13,
  };

  converArg: any = {
    'USD': 0.005,
    'EUR': 0.0046,
    'LIBRA ESTERLINA': 0.00409,
    'PESO ARG': 1,
    'PESO CHILENO': 4.07,
    'PESO COLOMBIANO': 24.11,
    'PESO MEXICANO': 0.0934,
    'DOLAR AUSTRALIANO': 0.00745,
    'DOLAR BELICE': 0.00991,
    'RUBLO RUSIA': 0.3766,
  };

  converChi: any = {
    'USD': 0.0012,
    'EUR': 0.00114,
    'LIBRA ESTERLINA': 0.001005,
    'PESO ARG': 0.2461,
    'PESO CHILENO': 1,
    'PESO COLOMBIANO': 5.932,
    'PESO MEXICANO': 0.023,
    'DOLAR AUSTRALIANO': 0.00183,
    'DOLAR BELICE': 0.00243,
    'RUBLO RUSIA': 0.0926,
  };

  converCol: any = {
    'USD': 0.000204,
    'EUR': 0.00019,
    'LIBRA ESTERLINA': 0.00016,
    'PESO ARG': 0.041,
    'PESO CHILENO': 0.16,
    'PESO COLOMBIANO': 1,
    'PESO MEXICANO': 0.0038,
    'DOLAR AUSTRALIANO': 0.0003,
    'DOLAR BELICE': 0.00041,
    'RUBLO RUSIA': 0.0157,
  };

  converMex: any = {
    'USD': 0.0527,
    'EUR': 0.0498,
    'LIBRA ESTERLINA': 0.0437,
    'PESO ARG': 10.677,
    'PESO CHILENO': 43.256,
    'PESO COLOMBIANO': 257.343,
    'PESO MEXICANO': 1,
    'DOLAR AUSTRALIANO': 0.0796,
    'DOLAR BELICE': 0.1058,
    'RUBLO RUSIA': 4.035,
  };

  converAus: any = {
    'USD': 0.661,
    'EUR': 0.6256,
    'LIBRA ESTERLINA': 0.549,
    'PESO ARG': 134.0464,
    'PESO CHILENO': 543.190,
    'PESO COLOMBIANO': 3228.6607,
    'PESO MEXICANO': 12.5539,
    'DOLAR AUSTRALIANO': 1,
    'DOLAR BELICE': 1.329,
    'RUBLO RUSIA': 50.6614,
  };

  converBelice: any = {
    'USD': 0.4977,
    'EUR': 0.4706,
    'LIBRA ESTERLINA': 0.4126,
    'PESO ARG': 100.77,
    'PESO CHILENO': 408.41,
    'PESO COLOMBIANO': 2426.8327,
    'PESO MEXICANO': 9.442,
    'DOLAR AUSTRALIANO': 0.75,
    'DOLAR BELICE': 1,
    'RUBLO RUSIA': 38.118,
  };

  converRus: any = {
    'USD': 0.013,
    'EUR': 0.0123,
    'LIBRA ESTERLINA': 0.0108,
    'PESO ARG': 2.6460,
    'PESO CHILENO': 10.7205,
    'PESO COLOMBIANO': 63.781,
    'PESO MEXICANO': 0.247,
    'DOLAR AUSTRALIANO': 0.0197,
    'DOLAR BELICE': 0.026,
    'RUBLO RUSIA': 1,
  };

  constructor() {}

  ngOnInit(): void {}

  convertir(): void {
    switch (this.tengo) {
      case 'USD':
        this.total = this.converUSD[this.quiero] * this.cantidad;
        break;
      case 'EUR':
        this.total = this.converEUR[this.quiero] * this.cantidad;
        break;
      case 'LIBRA ESTERLINA':
        this.total = this.converLibra[this.quiero] * this.cantidad;
        break;
      case 'PESO ARG':
        this.total = this.converArg[this.quiero] * this.cantidad;
      break;
      case 'PESO CHILENO':
        this.total = this.converChi[this.quiero] * this.cantidad;
      break;
      case 'PESO COLOMBIANO':
        this.total = this.converCol[this.quiero] * this.cantidad;
      break;
      case 'PESO MEXICANO':
        this.total = this.converMex[this.quiero] * this.cantidad;
      break;
      case 'DOLAR AUSTRALIANO':
        this.total = this.converAus[this.quiero] * this.cantidad;
      break;
      case 'DOLAR BELICE':
        this.total = this.converBelice[this.quiero] * this.cantidad;
      break;
      case 'RUBLO RUSIA':
        this.total = this.converRus[this.quiero] * this.cantidad;
      break;
    }
  }
}
