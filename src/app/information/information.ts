import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  imports: [],
  template: `
    <div class="p-6"><img src="/information/informationlogo.webp" alt="hot-products" /></div>
    <section class="max-w-[1170px] mx-auto px-6">
      <div>
        <p class="font-medium mb-2">2025.1.14</p>
        <a class="text-[#3493FA] inline-block mb-2">【重要】2025年春節連假出貨公告</a>
      </div>
      <div>
        <p class="font-medium mb-2">2024.12.25</p>
        <a class="text-[#3493FA] inline-block mb-2">【橡子小故事】Vol.01「音樂盒 心之谷 貓男爵」</a>
      </div>
      <div>
        <p class="font-medium mb-2">2024.03.22</p>
        <a class="text-[#3493FA] inline-block mb-2"
          >【重要】全新官方會員制度即將於2024年4月1日正式啟用</a
        >
      </div>
    </section>
  `,
  styles: ``,
})
export class Information {}
