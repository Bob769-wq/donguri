import { Component } from '@angular/core';

@Component({
  selector: 'app-products-preview',
  imports: [],
  template: `
    <div class="p-6"><img src="/products-preview/logo.webp" alt="hot-products" /></div>
    <!--    TODO: 這個max-width是中間一整塊都是固定的，最好把這些有用到的component包在一起比較好，未來如果會調整的話比較好調整-->
    <section class="max-w-[1170px] mx-auto px-6">
<!--      TODO: 這邊的資料應該是要用dynamic的，應該會是從後端抓資料回來顯示，不應該直接寫死-->
      <div class="flex justify-center gap-8">
        <div class="aspect-video flex-1">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/EzWqmkj7YYY?si=mCUp6ulqMnWcNj_o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="aspect-video flex-1">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/kP4hBX2Rdxk?si=v5zR-sMZn_QJm3v1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="aspect-video flex-1">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/e90LOESFWVM?si=uA9EUCSMqHWN-OqD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="flex justify-center mt-10">
<!--        TODO: 這些固定會一直用到的顏色請放在styles.css做成custom css-->
<!--        TODO: cursor-pointer-->
        <a
          class="inline-block px-20 py-2 text-center bg-[#E1D9C4] text-[#755B3A] hover:bg-[#C8B992]"
          >查看更多</a
        >
      </div>
    </section>
  `,
  styles: ``,
})
export class ProductsPreview {}
