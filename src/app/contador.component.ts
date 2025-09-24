import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <div class="contador-container">
      <h2>Contador: {{ contador }}</h2>
      <button (click)="incrementar()">Incrementar</button>
      <button (click)="decrementar()">Decrementar</button>
      <button (click)="resetear()">Resetear</button>
    </div>
  `,
  styles: [`
    .contador-container {
      border: 1px solid #850202ff;
      padding: 16px;
      border-radius: 8px;
      width: 220px;
      margin: 24px auto;
      text-align: center;
      background: #664040ff;
    }
    button {
      margin: 4px;
      padding: 6px 12px;
      font-size: 16px;
    }
  `]
})
export class ContadorComponent {
  contador = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  resetear() {
    this.contador = 0;
  }
}
