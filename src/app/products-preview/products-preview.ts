import { Component } from '@angular/core';

@Component({
  selector: 'app-products-preview',
  imports: [],
  template: `
    <div class="p-6"><img src="/products-preview/logo.webp" alt="hot-products" /></div>
    <section class="max-w-[1170px] mx-auto px-6">
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
