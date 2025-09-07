import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface InfoList {
  id: number;
  date: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-information',
  imports: [RouterLink],
  template: `
    <div class="p-6"><img src="/information/informationlogo.webp" alt="hot-products" /></div>
    <section class="px-6">
      @for (item of Info; track item.id) {
        <div>
          <p class="font-medium mb-2">{{ item.date }}</p>
          <a [routerLink]="item.link" class="text-[#3493FA] inline-block mb-2">
            {{ item.title }}
          </a>
        </div>
      }
    </section>
  `,
  styles: ``,
})
export class Information {
  Info: InfoList[] = [
    { id: 1, date: '2025.1.14', title: '【重要】2025年春節連假出貨公告', link: '/important' },
    {
      id: 2,
      date: '2024.12.25',
      title: '【橡子小故事】Vol.01「音樂盒 心之谷 貓男爵」',
      link: '/story',
    },
    {
      id: 3,
      date: '2024.03.22',
      title: '重要】全新官方會員制度即將於2024年4月1日正式啟用',
      link: '/new-member',
    },
  ];
}
