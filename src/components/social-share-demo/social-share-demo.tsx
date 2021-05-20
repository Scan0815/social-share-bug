import {Component, h, State} from '@stencil/core';
import {SocialSharing} from '@ionic-native/social-sharing';

@Component({
  tag: 'social-share-demo',
  styleUrl: 'social-share-demo.css',
  shadow: true,
})
export class SocialShareDemo {

  @State() shareState = null;

  share() {
    SocialSharing.shareViaWhatsApp('test text').then(() => {
     console.log('share success');
      this.shareState = 'share success';
    }, (error) => {
      console.log('share error',error);
      this.shareState = 'share error';
    });
  }

  render() {
    return (
      <ion-content>
        <ion-button onClick={() => this.share()}>share with whatsapp</ion-button>
        <ion-item lines='none'>
          {this.shareState}
        </ion-item>
      </ion-content>
    );
  }

}
