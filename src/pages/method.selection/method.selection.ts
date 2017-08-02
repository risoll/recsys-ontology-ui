import { Component, AfterViewInit } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { AppState } from "../../models/state.model";
import { Store } from "@ngrx/store";
import { RecommActions } from "../../actions/recomm.actions";
import { Observable } from "rxjs/Observable";
import { captureState } from "../../utils/common.util";

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
          Model Rekomendasi
        </ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <h6 ion-text style="padding: 10px; text-align: center; font-size: small;" color="ocean" class="highlight">
        Aplikasi ini menggunakan dua model interaksi<br>
        untuk merekomendasikan destinasi wisata. <br>
        Mohon kesediannya untuk mencoba <br> 
        kedua model interaksi ini.
      </h6>
      <ion-grid>
        <ion-row>
          <ion-col col-6>
            <ion-card>
              <ion-card-content>
                Model 1
              </ion-card-content>
              <ion-row no-padding>
                <ion-col text-left>
                  <button (click)="navigate(1)" color="fire" ion-button icon-right>
                    Mulai Model 1
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
              <ion-card-content>
                Model 2
              </ion-card-content>
              <ion-row no-padding>
                <ion-col text-left>
                  <button (click)="navigate(2)" color="fire" ion-button icon-right>
                    Mulai Model 2
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
        <ion-row>
          <ion-col col-12>
            <ion-card style="text-align: center">
              <ion-card-content>
                  <h6 ion-text style="padding: 10px; 
                    text-align: center; 
                    font-size: small;" 
                    color="ocean" 
                    class="highlight">
                    Mohon isi survei dibawah ini, survei tentang perbandingan kedua model diatas. <br>
                    <p *ngIf="(statusMode1$ | async) != 'completed' || (statusMode2$ | async) != 'completed'"><i>Anda harus menjalankan kedua model diatas terlebih dahulu.</i></p>
                  </h6>
                  <button [disabled]="!((statusMode1$ | async) == 'completed' && (statusMode2$ | async) == 'completed')" (click)="navigate(3)" color="fire" ion-button icon-right>
                    Survei Perbandingan Model
                  </button>

              </ion-card-content>

              <ion-row padding>
                <ion-col text-left *ngIf="(statusComparison$ | async) == 'incomplete'">
                  <p style="text-align: center" class="incomplete"><ion-icon name="close-circle"></ion-icon>
                    Belum diselesaikan</p>
                </ion-col>
                <ion-col text-left *ngIf="(statusComparison$ | async) == 'completed'">
                  <p style="text-align: center" class="complete"><ion-icon name="checkmark-circle"></ion-icon>
                    Sudah diselesaikan</p>
                </ion-col>
              </ion-row>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      <!--<p style="text-align: center; padding: 10px;" *ngIf="(statusMode1$ | async) == 'completed' && (statusMode2$ | async) == 'completed'">-->
        <!--Terimakasih karena telah menjalankan dan mengisi survey pada kedua model diatas!-->
      <!--</p>-->
    </ion-content>
  `
})
export class MethodSelectionPage {

  statusMode1$: Observable<string>;
  statusMode2$: Observable<string>;
  statusComparison$: Observable<string>;
  statusMode1: string = "incomplete";
  statusMode2: string = "incomplete";
  incomplete = true;
  comparisonCaption: string = "Mohon jalankan kedua model diatas terlebih dahulu";
  model1StatusCaption: string = "Belum diselesaikan";
  model2StatusCaption: string = "Belum diselesaikan";

  constructor(public navCtrl: NavController,
    private store: Store<AppState>,
    private recommActions: RecommActions) {
    this.statusMode1$ = this.store.select(s => s.recomm.statusMode1);
    this.statusMode2$ = this.store.select(s => s.recomm.statusMode2);
    this.statusComparison$ = this.store.select(s => s.recomm.statusComparison);


  }


  navigate(mode: number) {
    if (mode == 3)
      this.navCtrl.push('PostFeedbackPage');
    else {
      this.store.dispatch(this.recommActions.setMode(mode));
      this.navCtrl.push('RecommendationPage', {
        mode: mode
      });
    }
  }

}
