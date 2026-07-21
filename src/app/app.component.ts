import { Component, OnDestroy } from '@angular/core';
import { Platform, AlertController, ToastController } from '@ionic/angular';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent implements OnDestroy {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Randomizer',
      url: '/slots',
      icon: 'shuffle'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];

  private versionUpdatesSub?: Subscription;

  constructor(
    private alertController: AlertController,
    private platform: Platform,
    private toastController: ToastController,
    public updater: SwUpdate
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {});

    if (this.updater.isEnabled) {
      this.versionUpdatesSub = this.updater.versionUpdates
        .pipe(filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'))
        .subscribe((event) => this.onUpdateReady(event));
    }
  }

  ngOnDestroy() {
    this.versionUpdatesSub?.unsubscribe();
  }

  async onUpdateReady(event: VersionReadyEvent) {
    const appData = event.latestVersion.appData as { updateMessage?: string } | undefined;
    const detail = appData?.updateMessage ?? 'A new version is available.';

    const alert = await this.alertController.create({
      header: 'Update Available!',
      message: `New version is available. ${detail}`,
      buttons: [
        { text: 'Later', role: 'cancel' },
        {
          text: 'Now',
          handler: async () => {
            await this.updater.activateUpdate();
            window.location.reload();
          }
        }
      ]
    });

    await alert.present();
  }

  async showToastMessage(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
      buttons: [{ text: 'Close', role: 'cancel' }]
    });

    await toast.present();
  }

  async checkForUpdate() {
    if (this.updater.isEnabled) {
      await this.showToastMessage('Checking for updates...');
      await this.updater.checkForUpdate();
    } else {
      await this.showToastMessage('Updates are not enabled.');
    }
  }
}
