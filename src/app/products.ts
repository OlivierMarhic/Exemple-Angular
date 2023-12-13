export interface Productabl {
  id: number;
  name: string;
  price: number;
  description: string;
  devise: string;  
}

export const Prodlist = [
  {
    id: 1,
    name: 'Phone XL',
    price: 899, 
    description: 'A large phone with one of the best screens',
    devise: '€',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    devise: '€',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    devise: '€',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
