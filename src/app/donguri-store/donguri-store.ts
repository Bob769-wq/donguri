import { Component } from '@angular/core';

interface StoreList {
  id: number;
  img: string;
  link: string;
  title: string;
}

@Component({
  selector: 'app-donguri-store',
  imports: [],
  template: `
    <div class="p-6"><img src="/donguri-store/storelogo.webp" alt="hot-products" /></div>
    <section class="max-w-[1170px] mx-auto px-6 py-5">
      <div class="grid grid-cols-2 gap-3">
        @for (item of storeItems; track item.id) {
          <a [href]="item.link" target="_blank"
            ><img class="w-full" [src]="item.img" [alt]="item.title"
          /></a>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class DonguriStore {
  storeItems: StoreList[] = [
    {
      id: 1,
      img: '/donguri-store/taipei.webp',
      link: 'https://www.google.com/maps/place/%E6%A9%A1%E5%AD%90%E5%85%B1%E5%92%8C%E5%9C%8B%E4%BF%A1%E7%BE%A9%E5%BA%97/@28.7643887,119.3510095,5z/data=!3m1!5s0x3442abba3827e697:0xcc5e882ece9a230e!4m6!3m5!1s0x3442abb0b444119b:0xb1877f1abe8ecad0!8m2!3d25.0382241!4d121.5667909!16s%2Fg%2F11btyvsjnw?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D',
      title: '台北',
    },
    {
      id: 2,
      img: '/donguri-store/lalaport.webp',
      link: 'google.com/maps/place/橡子共和國台北南港LaLaport店/@25.0591946,121.6176528,17z/data=!4m6!3m5!1s0x3442ad3b26f1331b:0x12f7e7c6aa52eb4d!8m2!3d25.0591946!4d121.6176528!16s%2Fg%2F11x8jt5gl7?authuser=0&entry=tts&g_ep=EgoyMDI1MDYwNC4wIPu8ASoASAFQAw%3D%3D&skid=c3c6163c-5348-4159-979d-17ac27b46bf0',
      title: '南港',
    },
    {
      id: 3,
      img: '/donguri-store/gun.webp',
      link: 'https://www.google.com/maps/place/%E6%A9%A1%E5%AD%90%E5%85%B1%E5%92%8C%E5%9C%8B%E5%8F%B0%E4%B8%AD%E4%B8%AD%E6%B8%AF%E5%BA%97/@28.7643887,119.3510095,5z/data=!3m1!5s0x34693d8cb8ab5429:0x2f454b8b4bd8182f!4m7!3m6!1s0x34693d49b9d454af:0xcad4e83cc1ff7a37!8m2!3d24.1647673!4d120.6434748!15sCgEqWgMiASqSAQl0b3lfc3RvcmXgAQA!16s%2Fg%2F11mvjhrfmt?authuser=0&coh=210790&entry=tts',
      title: '中港',
    },
    {
      id: 4,
      img: '/donguri-store/gun-lalaport.webp',
      link: 'https://www.google.com/maps/place/%E6%A9%A1%E5%AD%90%E5%85%B1%E5%92%8C%E5%9C%8B%E5%8F%B0%E4%B8%ADLaLaport%E5%BA%97/@28.7643887,119.3510095,5z/data=!3m1!5s0x34693d3eefef366d:0x9974aecd3cb16364!4m7!3m6!1s0x34693d5fe4bf66ab:0xaaa20882366a9f61!8m2!3d24.1357623!4d120.6924503!15sCgEqWgMiASqSAQl0b3lfc3RvcmXgAQA!16s%2Fg%2F11ty783d5p?authuser=0&coh=210790&entry=tts',
      title: '台中',
    },
    {
      id: 5,
      img: '/donguri-store/tainan.webp',
      link: 'https://www.google.com/maps/place/%E6%A9%A1%E5%AD%90%E5%85%B1%E5%92%8C%E5%9C%8B%E5%8F%B0%E5%8D%97%E5%B0%8F%E8%A5%BF%E9%96%80%E5%BA%97/@22.9873418,120.1991126,8z/data=!3m1!5s0x346e767bf3ecf66b:0x3097d6fa8a67b1f5!4m7!3m6!1s0x346e77bbf7674f63:0x7a32c044f170072c!8m2!3d22.9873418!4d120.1991126!15sCgEqWgMiASqSAQl0b3lfc3RvcmXgAQA!16s%2Fg%2F11pb6kxwg6?authuser=0&coh=210790&entry=tts',
      title: '台南',
    },
    {
      id: 6,
      img: '/donguri-store/takao.webp',
      link: 'https://www.google.com/maps/place/%E6%A9%A1%E5%AD%90%E5%85%B1%E5%92%8C%E5%9C%8B%E9%AB%98%E9%9B%84%E6%BC%A2%E7%A5%9E%E5%B7%A8%E8%9B%8B%E5%BA%97/@28.7643887,119.3510095,5z/data=!3m1!5s0x346e0508af6f275f:0x5c95d0733851cbdf!4m7!3m6!1s0x346e05bfba14fc53:0xdd786cb63a5de39!8m2!3d22.6697552!4d120.3023717!15sCgEqWgMiASqSAQVzdG9yZeABAA!16s%2Fg%2F11sy41qgqj?authuser=0&coh=210790&entry=tts',
      title: '高雄',
    },
  ];
}
