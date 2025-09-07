import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface VideoList {
  id: number;
  link: string;
}

@Component({
  selector: 'app-products-preview',
  imports: [],
  template: `
    <div class="p-6"><img src="/products-preview/logo.webp" alt="hot-products" /></div>

    <section class="px-6">
      <div class="flex justify-center gap-8">
        @for (item of video; track item.id) {
          <div class="aspect-video flex-1">
            <iframe
              width="100%"
              height="100%"
              [src]="getSafeUrl(item.link)"
              title="YouTube
              video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        }
      </div>
      <div class="flex justify-center mt-10">
        <!--        TODO: cursor-pointer-->
        <a
          class="inline-block px-20 py-2 text-center cursor-pointer bg-[var(--check-button)] text-[var(--check-text)] hover:bg-[var(--check-hover)]"
          >查看更多</a
        >
      </div>
    </section>
  `,
  styles: ``,
})
export class ProductsPreview {
  constructor(private sanitizer: DomSanitizer) {}
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  video: VideoList[] = [
    { id: 1, link: 'https://www.youtube.com/embed/EzWqmkj7YYY?si=mCUp6ulqMnWcNj_o' },
    { id: 2, link: 'https://www.youtube.com/embed/kP4hBX2Rdxk?si=v5zR-sMZn_QJm3v1' },
    { id: 3, link: 'https://www.youtube.com/embed/e90LOESFWVM?si=uA9EUCSMqHWN-OqD' },
  ];
}
