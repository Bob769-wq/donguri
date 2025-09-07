import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface FeatureItems {
  id: number;
  title: string;
  img: string;
  link: string;
}

@Component({
  selector: 'app-feature',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="p-3"><img src="/feature/featurelogo.webp" alt="feature" /></div>
    <section class="px-6">
      <div class="grid grid-cols-3 gap-3">
        @for (item of featureCard; track item.id) {
          <a [routerLink]="item.link" routerLinkActive="">
            <img [src]="item.img" class="w-full" [alt]="item.title" />
          </a>
        }
      </div>
      <div class="flex justify-center">
        <a
          class="inline-block px-20 py-2 text-center cursor-pointer bg-[var(--check-button)] text-[var(--check-text)] hover:bg-[var(--check-hover)]"
          >特集一覽</a
        >
      </div>
    </section>
  `,
  styles: ``,
})
export class Feature {
  featureCard: FeatureItems[] = [
    {
      id: 1,
      title: '晴天☀️雨天️🌧️都適合~輕便折傘系列☂️',
      img: '/feature/umbrella.webp',
      link: '/umbrella',
    },
    {
      id: 2,
      title: '傳統工藝精品 文庫屋大關系列包款👜',
      img: '/feature/traditional.webp',
      link: '/traditional',
    },
    {
      id: 3,
      title: '可愛️又實用的珐瑯系列廚具🍽️',
      img: '/feature/kitchenware.webp',
      link: '/kitchenware',
    },
    {
      id: 4,
      title: '立體場景沙漏 陪伴每一分每一秒⏳',
      img: '/feature/time.webp',
      link: '/time',
    },
    {
      id: 5,
      title: '️龍貓日式和果子吊飾 美味復刻🍡',
      img: '/feature/candy.webp',
      link: '/candy',
    },
    {
      id: 6,
      title: 'Noritake 2025年度紀念盤️🍽️',
      img: '/feature/noritake.webp',
      link: '/noritake',
    },
  ];
}
