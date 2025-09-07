import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CountryList {
  id: number;
  title: string;
  price: string;
  oldprice?: string;
  link: string;
  img: string;
  img2?: string;
  soldout?: boolean;
}

@Component({
  selector: 'app-country-road',
  imports: [RouterLink],
  template: `
    <section class="px-6 py-20">
      <div class="text-center text-2xl">
        <h3>心之谷</h3>
      </div>
      <div class="grid grid-cols-4 items-center gap-4 overflow-x-auto p-8">
        @for (item of countryItems; track item.id) {
          @if (item.img2 && item.img2.length > 0) {
            <a [routerLink]="item.link" class="relative group block">
              <div class="relative lg:w-64 md:w-52 object-cover">
                <img
                  [src]="item.img"
                  class="w-full transition-opacity duration-300 group-hover:opacity-0"
                  [alt]="item.title"
                />
                <img
                  [src]="item.img2"
                  class="w-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  [alt]="item.title"
                />
              </div>
              <div class="absolute group-hover:flex bottom-16 right-4 gap-2 hidden ">
                <div class="bg-white rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 640 640"
                  >
                    <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path
                      d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z"
                    />
                  </svg>
                </div>
                <div class="bg-white rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    class="stroke-black"
                    viewBox="0 0 640 640"
                  >
                    <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path
                      d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"
                    />
                  </svg>
                </div>
              </div>

              <h4 class="text-center mt-2">{{ item.title }}</h4>
              <p class="text-center">{{ item.price }}</p>
            </a>
          } @else {
            <a [routerLink]="item.link" class="relative group block">
              <div class="relative lg:w-64 md:w-52 ">
                <img
                  [src]="item.img"
                  class="w-full aspect-square object-contain"
                  [alt]="item.title"
                />
              </div>
              <div class="absolute group-hover:flex bottom-16 right-4 gap-2 hidden ">
                <div class="bg-white rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 640 640"
                  >
                    <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path
                      d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z"
                    />
                  </svg>
                </div>
                <div class="bg-white rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    class="stroke-black"
                    viewBox="0 0 640 640"
                  >
                    <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path
                      d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"
                    />
                  </svg>
                </div>
              </div>

              <h4 class="text-center mt-2">{{ item.title }}</h4>
              <p class="text-center">{{ item.price }}</p>
            </a>
          }
        }
      </div>
      <div class="flex justify-center mt-16">
        <a
          class="inline-block px-20 py-2 text-center cursor-pointer bg-[var(--check-button)] text-[var(--check-text)] hover:bg-[var(--check-hover)]"
          >查看更多</a
        >
      </div>
    </section>
  `,
  styles: ``,
})
export class CountryRoad {
  countryItems: CountryList[] = [
    {
      id: 1,
      title: 'A4透明文件夾 心之谷 雯和聖司',
      price: 'NT$110',
      img: '/country-road/couple.webp',
      link: '/couple',
    },
    {
      id: 2,
      title: 'A4透明文件夾 心之谷 貓男爵',
      price: 'NT$110',
      img: '/country-road/sir-cat.webp',
      link: '/sir-cat',
    },
    {
      id: 3,
      title: 'A4透明文件夾 心之谷 雯和聖司',
      price: 'NT$110',
      img: '/country-road/cat-couple.webp',
      link: '/cat-couple',
    },
    {
      id: 4,
      title: '場景滿載撲克牌 心之谷',
      price: 'NT$360',
      img: '/country-road/poker.webp',
      img2: '/country-road/poker2.webp',
      link: '/poker',
    },
  ];
}
