function countProfit(shoppers) {
  let listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];

  var supplyReport = [

    {
      product: "Sepatu Staccatu",
      shoppers: [],
      leftOver: listBarang[0][2],
      totalProfit: 0
    },

    {
      product: "Baju Zoro",
      shoppers: [],
      leftOver: listBarang[1][2],
      totalProfit: 0
    },

    {
      product: "Sweater Uniklooh",
      shoppers: [],
      leftOver: listBarang[2][2],
      totalProfit: 0
    }

  ];

  // console.log(supplyReport);

  if (shoppers.length === 0) {
    return "[]";
  } else {

    for (var i = 0; i < shoppers.length; i++) {

      var buyer = shoppers[i].name;
      var product1 = shoppers[i].product;
      var amount = shoppers[i].amount;
      var product2 = false;
      var stock;
      var count = 0;

      // console.log("buyer -> " + buyer);
      // console.log("product1 -> " + product1);
      // console.log("amount -> " + amount);
      // console.log(count);
      // console.log("--<>--");

      while (product2 === false) {
        // console.log(count);

        if (listBarang[count][0] === product1) {
          product2 = listBarang[count][0];
          stock = listBarang[count][2];
          // console.log(product2);
          // console.log("ini stock -> " + listBarang[count][2]);
          // console.log("ini count -> " + count);
        } else if (count < 2) {
          count ++
        } else {
          product2 = true;
          return supplyReport;
        }

      }

      if (stock >= amount) {
        stock -= amount;
        // console.log("ini stock after -> " + stock);
        listBarang[count][2] -= amount;
        // console.log("cek arr stock -> " + listBarang[count][2]);
        // console.log("ini count -> " + count);
        // console.log(supplyReport[count]);
        supplyReport[count].shoppers.push(buyer);
        supplyReport[count].leftOver -= amount;
        supplyReport[count].totalProfit += listBarang[count][1] * amount;
        // console.log(supplyReport);
      }
    }
  }

  return supplyReport;

}


// TEST CASES
// console.log(countProfit([{name: 'Windi', product: 'Baju Zoro', amount: 2}]));
console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 2
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 3
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 8
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 10
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 1
}, {
  name: 'Devi',
  product: 'Baju Zoro',
  amount: 1
}, {
  name: 'Lisa',
  product: 'Baju Zoro',
  amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Naiki',
  amount: 5
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
