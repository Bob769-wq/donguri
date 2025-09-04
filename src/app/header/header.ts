import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { HostListener } from '@angular/core';

interface NavList {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  imports: [MatIcon, RouterLink],
  template: `
<!--    TODO: header的動畫想一下要怎麼實現-->
    <header class="fixed left-0 right-0 top-0 z-50 ">
      <div class="flex flex-col">
        <div class="bg-[#6F9E3E] p-2">
          <p class="text-center text-white">橡子共和國台灣歡慶10週年🎊</p>
        </div>
<!--        TODO: isScrolled的功能是什麼？操作上沒有看到差異-->
        <div class="py-2 px-5 flex items-center bg-white" [class.py-1]="isScrolled()">
          <ul class="flex flex-1 lg:invisible">
            <li><mat-icon>search</mat-icon></li>
            <li><mat-icon>person</mat-icon></li>
          </ul>
          <a class="h-16 lg:h-28 justify-center" [class.lg:h-14]="isScrolled()"
            ><img src="/logo.webp" class="h-full" alt="logo"
          /></a>
          <ul class="flex flex-1 gap-5 justify-end items-center">
<!--            TODO: 這邊的功能跟hover?-->
            <li><mat-icon>chat</mat-icon></li>
            <li class="hidden lg:block"><mat-icon>search</mat-icon></li>
            <li class="hidden lg:block"><mat-icon>person</mat-icon></li>
            <li><mat-icon>shopping_bag</mat-icon></li>
          </ul>
        </div>
        <div class="bg-[#E1D9C4] flex justify-center">
          <ul class="flex gap-10 text-[#6A4E2E] text-base">
            @for (item of navItems; track item.id) {
              <li class="py-4">
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
        </div>
      </div>
    </header>
  `,
  styles: ``,
})
export class Header {
  isScrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  navItems: NavList[] = [
    { id: 1, title: '首頁', link: '/home' },
    { id: 2, title: '所有商品', link: '/products' },
    { id: 3, title: '作品分類', link: '/works' },
    { id: 4, title: '部落格首頁', link: '/blog' },
    { id: 5, title: '最後庫存❗️', link: '/last' },
    { id: 6, title: '會員權益', link: '/member' },
  ];
}
