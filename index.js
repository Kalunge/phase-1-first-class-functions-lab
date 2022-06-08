// Code your solution in this file!

let drivers = ["Titus", "Muthomi", "Kalunge", "Talib", "Faith"];
const returnFirstTwoDrivers = (drivers) => {
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = (drivers) => {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return function () {
    return multiplier ** 2;
  };
};

const fareDoubler = (fare) => {
  return fare * 2;
};

const fareTripler = (fare) => fare * 3;

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}
