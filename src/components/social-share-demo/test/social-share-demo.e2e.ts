import { newE2EPage } from '@stencil/core/testing';

describe('social-share-demo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<social-share-demo></social-share-demo>');

    const element = await page.find('social-share-demo');
    expect(element).toHaveClass('hydrated');
  });
});
