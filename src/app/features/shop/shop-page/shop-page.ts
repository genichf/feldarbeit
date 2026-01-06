import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ContentService } from '../../../core/services/content.service';

@Component({
  selector: 'app-shop-page',
  imports: [CurrencyPipe],
  templateUrl: './shop-page.html',
  styleUrl: './shop-page.css',
})
export class ShopPage {
  protected content = inject(ContentService);
}
