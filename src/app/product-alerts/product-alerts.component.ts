import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prodlist, Productabl } from '../products';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-alerts',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css',
})
export class ProductAlertsComponent {
  @Input() product: Productabl | undefined;
}
