import { Curso } from '../curso';

export const COURSES: Curso[] = [
    {
      id: 1,
      name: 'TypeScript Desde Cero',
      startDate: 'August 10, 2019',
      description: 'Lleva Javascript al siguiente nivel con tipado estatico y programacion orientada a objetos',
      price: 25.99,
      rating: 4.5,
      imageUrl: 'assets/images/typescript.png'
    },
    {
      id: 2,
      name: 'Angular Desde Cero',
      startDate: 'September 10, 2019',
      description: 'Aprende el framework frontend con mas demanda del mercado',
      price: 29.99,
      rating: 5,
      imageUrl: 'assets/images/angular.png'
    },
    {
      id: 3,
      name: 'Formularios y APIs con Angular',
      startDate: 'October 20, 2019',
      description: 'Aprende a consumir datos de APIs Rest y a gestionar formularios con Anguar',
      price: 23.5,
      rating: 3.9,
      imageUrl: 'assets/images/angular.png'
    }
  ];