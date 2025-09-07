import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

interface HotList {
  id: number;
  title: string;
  price: string;
  link: string;
  img: string;
  img2: string;
}

@Component({
  selector: 'app-hot-hot-products',
  imports: [RouterLink],
  template: `
    <div class="p-6">
      <img src="/hot-products/hotproductslogo.webp" alt="hot-products" class="w-full" />
    </div>
    <section class="px-6 py-8">
      <div class="grid grid-cols-4 gap-4">
        @for (item of products; track item.id) {
          <a [routerLink]="item.link" class="relative group block">
            <div class="relative">
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
            <div class="absolute group-hover:flex bottom-14 right-4 gap-2 hidden ">
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

            <h4 class="text-center">{{ item.title }}</h4>
            <p class="text-center">{{ item.price }}</p>
          </a>
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
export class HotProducts {
  products: HotList[] = [
    {
      id: 1,
      title: '音樂盒 魔法公主 山獸神',
      price: 'NT$3,980',
      link: '/mori-god',
      img: '/hot-products/mori-god1.webp',
      img2: '/hot-products/mori-god2.webp',
    },
    {
      id: 2,
      title: '單試管花插 魔法公主 木靈美好的一天',
      price: 'NT$1,400',
      link: '/mori-one',
      img: '/hot-products/mori-one1.webp',
      img2: '/hot-products/mori-one2.webp',
    },
    {
      id: 3,
      title: '迷你桌上時鐘 魔法公主 在小桑的面具上',
      price: 'NT$1,980',
      link: '/mask',
      img: '/hot-products/mask1.webp',
      img2: '/hot-products/mask2.webp',
    },
    {
      id: 4,
      title: '飾物盒 魔法公主 木靈歇一會',
      price: 'NT$1,280',
      link: '/mori-wood',
      img: '/hot-products/moriwood1.webp',
      img2: '/hot-products/moriwood2.webp',
    },
    {
      id: 5,
      title: '擺飾 魔法公主 胖乎乎木靈',
      price: 'NT$1,100',
      link: '/fat',
      img: '/hot-products/fat1.webp',
      img2: '/hot-products/fat2.webp',
    },
    {
      id: 6,
      title: '擺飾 魔法公主 坐著的木靈',
      price: 'NT$1,100',
      link: '/sit',
      img: '/hot-products/sit1.webp',
      img2: '/hot-products/sit2.webp',
    },
    {
      id: 7,
      title: '擺飾 魔法公主 行走的木靈',
      price: 'NT$1,100',
      link: '/walk',
      img: '/hot-products/walk1.webp',
      img2: '/hot-products/walk2.webp',
    },
    {
      id: 8,
      title: '擺飾 魔法公主 爬高的木靈',
      price: 'NT$1,100',
      link: '/climb',
      img: '/hot-products/climb1.webp',
      img2: '/hot-products/climb2.webp',
    },
  ];
}
