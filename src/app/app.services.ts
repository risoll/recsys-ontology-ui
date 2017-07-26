import { LoadingService } from './../services/loading.service';
import { UserService } from './../services/user.service';
import {GoogleService} from "../services/google.service";
import {RecommendationService} from "../services/recommendation.service";
import { PlaceService } from "../services/place.service";
import { AlertService } from '../services/alert.service';
/**
 * Created by solehuddien on 27/04/17.
 */
export const APP_SERVICES = [
  GoogleService,
  RecommendationService,
  PlaceService,
  UserService,
  AlertService,
  LoadingService
];
