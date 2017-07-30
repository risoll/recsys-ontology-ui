import {Component} from '@angular/core';

import {NavController, IonicPage} from 'ionic-angular';
import {AppState} from "../../models/state.model";
import {Store} from "@ngrx/store";
import {RecommActions} from "../../actions/recomm.actions";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-method-selection',
  template: `
    <ion-header>
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>
          Mode Rekomendasi
        </ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <h6 ion-text style="padding: 10px; text-align: center; font-size: small;" color="ocean" class="highlight">
        Aplikasi ini menggunakan dua mode.<br>
        Mohon kesediannya untuk menyelesaikan <br> 
        proses rekomendasi pada kedua mode dibawah ini.
      </h6>
      <ion-grid>
        <ion-row>
          <ion-col col-6>
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Mode 1
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Mode ini menggunakan suatu <b>algoritma yang ada</b>
                pada suatu penelitian.
              </ion-card-content>
              <ion-row no-padding>
                <ion-col text-left>
                  <button (click)="navigate(1)" color="fire" ion-button icon-right>
                    Mulai Mode 1
                  </button>
                </ion-col>
              </ion-row>
              <ion-row padding>
                <ion-col text-left *ngIf="(statusMode1$ | async) == 'incomplete'">
                  <p class="incomplete"><ion-icon name="close-circle"></ion-icon>
                  Belum diselesaikan</p>
                </ion-col>
                <ion-col text-left *ngIf="(statusMode1$ | async) == 'completed'">
                  <p class="complete"><ion-icon name="checkmark-circle"></ion-icon>
                  Sudah diselesaikan</p>
                </ion-col>
              </ion-row>
            </ion-card>
          </ion-col>
          <ion-col col-6>
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Mode 2
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Mode ini menggunakan <b>pengembangan algoritma</b>
                pada Mode 1.
              </ion-card-content>
              <ion-row no-padding>
                <ion-col text-left>
                  <button (click)="navigate(2)" color="fire" ion-button icon-right>
                    Mulai Mode 2
                  </button>
                </ion-col>
              </ion-row>
              <ion-row padding>
                <ion-col text-left *ngIf="(statusMode2$ | async) == 'incomplete'">
                  <p class="incomplete"><ion-icon name="close-circle"></ion-icon>
                  Belum diselesaikan</p>
                </ion-col>
                <ion-col text-left *ngIf="(statusMode2$ | async) == 'completed'">
                  <p class="complete"><ion-icon name="checkmark-circle"></ion-icon>
                  Sudah diselesaikan</p>
                </ion-col>
              </ion-row>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      <p style="text-align: center; padding: 10px;" *ngIf="(statusMode1$ | async) == 'completed' && (statusMode2$ | async) == 'completed'">
        Terimakasih karena telah menjalankan dan mengisi survey pada kedua mode diatas!
      </p>
    </ion-content>
  `
})
export class MethodSelectionPage {

  statusMode1$: Observable<string>;
  statusMode2$: Observable<string>;

  constructor(public navCtrl: NavController,
              private store: Store<AppState>,
              private recommActions: RecommActions) {
    this.statusMode1$ = this.store.select(s => s.recomm.statusMode1);
    this.statusMode2$ = this.store.select(s => s.recomm.statusMode2);
  }

  navigate(mode: number) {
    this.store.dispatch(this.recommActions.setMode(mode));
    this.navCtrl.push('RecommendationPage', {
      mode: mode
    });
  }

}
