import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Freages" },
      { id: 2, name: "Smartphones" },
    ];
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Sumsung" },
      { id: 3, name: "LG" },
    ];
    this._devices = [
      {
        id: 1,
        name: "IPhone 12 pro",
        price: 25343,
        rating: 5,
        img: "../../../server/static/04b23981-ac64-4bb5-b4b0-28ef6f6097a7.jpg",
      },
      {
        id: 2,
        name: "IPhone 13 pro",
        price: 35343,
        rating: 4,
        img: "../../../server/static/04b23981-ac64-4bb5-b4b0-28ef6f6097a7.jpg",
      },
      {
        id: 3,
        name: "IPhone 11 pro",
        price: 15343,
        rating: 3,
        img: "../../../server/static/04b23981-ac64-4bb5-b4b0-28ef6f6097a7.jpg",
      },
      {
        id: 4,
        name: "IPhone 11 pro",
        price: 15343,
        rating: 3,
        img: "../../../server/static/04b23981-ac64-4bb5-b4b0-28ef6f6097a7.jpg",
      },
      {
        id: 5,
        name: "IPhone 11 pro",
        price: 15343,
        rating: 3,
        img: "../../../server/static/04b23981-ac64-4bb5-b4b0-28ef6f6097a7.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
