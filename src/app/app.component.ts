import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  titulo = signal('TechStore');
  descripcion = signal('Bienvenidos a TechStore tu tienda de confianza');
  producto1 = signal({ nombre: 'Acer nitro 5 ', precio: 3000000, imagen: 'assets/Acer imagen.jpg' });
  producto2 = signal({ nombre: 'Auriculares', precio: 350000, imagen: 'assets/audifonoscasco.jpeg' });
  producto3 = signal({ nombre: 'Iphone', precio: 2800000, imagen: 'assets/iphone.webp' });

  comprar (producto : string){
    alert(`Has comprado: ${producto}`);
  }
}
