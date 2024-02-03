import { observable, action } from "mobx";
import { IPngName } from "../models/content";

export default class ContentStore {
  @observable pngName: IPngName[] = [];

  constructor() {
    this.pngName = [
        {"id": 1, "name": "air"},
        {"id": 2, "name": "water"},
        {"id": 3, "name": "dragon"},
        {"id": 4, "name": "devil"},
        {"id": 5, "name": "lightning"},
        {"id": 6, "name": "gun"},
        {"id": 7, "name": "rock"},
        {"id": 8, "name": "fire"},
        {"id": 9, "name": "scissors"},
        {"id": 10, "name": "snake"},
        {"id": 11, "name": "human"},
        {"id": 12, "name": "tree"},
        {"id": 13, "name": "wolf"},
        {"id": 14, "name": "sponge"},
        {"id": 15, "name": "paper"}
    ];
  }

}
