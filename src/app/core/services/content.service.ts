import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private http = inject(HttpClient);

  // Дані бренду та навігація
  readonly brandName = signal('Feldarbeit');
  readonly navLinks = signal([
    { label: 'Projekte', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Kontakt', path: '/' }
  ]);

  // Цитата (буде оновлюватися з API)
  readonly dailyQuote = signal({ text: 'Завантаження...', reference: '' });

  // Товари для магазину (Хардкод)
  readonly shopItems = signal([
    { id: 1, name: 'Feldarbeit T-Shirt', price: 29.0, image: 'https://placehold.co/400x500?text=T-Shirt' },
    { id: 2, name: 'Design Mug', price: 15.0, image: 'https://placehold.co/400x500?text=Mug' },
    { id: 3, name: 'Branded Cap', price: 20.0, image: 'https://placehold.co/400x500?text=Cap' }
  ]);

  constructor() {
    this.fetchBibleQuote();
  }

  fetchBibleQuote() {
    this.http.get<any>('https://bible-api.com/john+1:1').subscribe({
      next: (data) => this.dailyQuote.set({ text: data.text, reference: data.reference }),
      error: () => this.dailyQuote.set({ text: 'На початку було Слово...', reference: 'Івана 1:1' })
    });
  }
}