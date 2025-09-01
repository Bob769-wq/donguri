import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { HeroSection } from './hero-section/hero-section';
import { Feature } from './feature/feature';
import { HotProducts } from './hot-products/hot-products';
import { NewProducts } from './new-products/new-products';
import { CountryRoad } from './country-road/country-road';
import { HowlCastle } from './howl-castle/howl-castle';
import { Totoro } from './totoro/totoro';
import { Kiki } from './kiki/kiki';
import { Information } from './information/information';
import { ProductsPreview } from './products-preview/products-preview';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    HeroSection,
    Feature,
    HotProducts,
    NewProducts,
    CountryRoad,
    HowlCastle,
    Totoro,
    Kiki,
    Information,
    ProductsPreview,
  ],
  template: `
    <app-header />
    <app-hero-section />
    <app-feature />
    <app-hot-hot-products />
    <app-new-hot-products />
    <app-country-road />
    <app-howl-castle />
    <app-totoro />
    <app-kiki />
    <app-information />
    <app-products-preview />
  `,
  styles: ``,
})
export class App {
  protected readonly title = signal('donguri');
}
