import { newSpecPage } from '@stencil/core/testing';
import { SocialShareDemo } from '../social-share-demo';

describe('social-share-demo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SocialShareDemo],
      html: `<social-share-demo></social-share-demo>`,
    });
    expect(page.root).toEqualHtml(`
      <social-share-demo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </social-share-demo>
    `);
  });
});
