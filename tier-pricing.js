const pricingTiers = [{
    "tier": 1,
    "min": 0,
    "max": 100,
    "price": 0.1
  },
  {
    "tier": 2,
    "min": 100,
    "max": 1000,
    "price": 0.07
  },
  {
    "tier": 3,
    "min": 1000,
    "max": 10000,
    "price": 0.05
  },
  {
    "tier": 4,
    "min": 10000,
    "max": 50000,
    "price": 0.035
  }
];

function PricingCalculator(numOfVideos, lenOfVideos) {
  let totalMins = numOfVideos * lenOfVideos;
  let totalPrice = 0;
  let s = 0;

  // loop per pricing tier
  for (i = 0; i < pricingTiers.length; i++) {
    // if this is last tier or totalMins is less than pricing tier max, use totalMins as a unit 
    if ((i + 1 == pricingTiers.length) || (totalMins <= pricingTiers[i].max)) {
      unit = totalMins;
    } else {
      unit = pricingTiers[i].max - pricingTiers[i].min;
    }

    // calculate price
    totalPrice = totalPrice + (unit * pricingTiers[i].price);

    // stop if totalMins less than equals 0
    s = totalMins - unit;
    if (s < 1) {
      break;
    }

    // assign leftover total min
    totalMins = s;
  }

  return totalPrice.toFixed(2);
}

console.log(PricingCalculator(1, 1));
console.log(PricingCalculator(5000, 0.5));
console.log(PricingCalculator(102, 1));
console.log(PricingCalculator(10000000, 10));
console.log(PricingCalculator(1, 500));