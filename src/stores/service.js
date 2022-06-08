import { defineStore } from "pinia";

export const useServiceStore = defineStore("serviceStore", {
  state: () => ({
    serviceData: [
      {
        serviceImg:
          "https://image.made-in-china.com/2f0j00NWhreKJnyVqR/Coin-Operated-6-Outlets-RO-Drinking-Water-Filling-Station-Vending-Machine.jpg",
        serviceName: "Sales of vending equiptment",
        serviceCompany: "kiafika",
        serviceRating: 4.7,
      },
      {
        serviceImg:
          "https://image.made-in-china.com/2f0j00NWhreKJnyVqR/Coin-Operated-6-Outlets-RO-Drinking-Water-Filling-Station-Vending-Machine.jpg",
        serviceName: "Sales of vending equiptment",
        serviceCompany: "kiafika",
        serviceRating: 4.7,
      },
      {
        serviceImg:
          "https://cdn.pixabay.com/photo/2018/11/04/16/28/london-3794348_960_720.jpg",
        serviceName: "Advertising of services",
        serviceCompany: "kiafika",
        serviceRating: 4.2,
      },
      {
        serviceImg:
          "https://cdn.pixabay.com/photo/2018/11/04/16/28/london-3794348_960_720.jpg",
        serviceName: "Advertising of services",
        serviceCompany: "kiafika",
        serviceRating: 4.2,
      },
    ],
  }),
  getters: {},
  actions: {},
});
