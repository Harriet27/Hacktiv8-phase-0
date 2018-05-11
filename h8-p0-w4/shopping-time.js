function shoppingTime(memberId, money) {
  if (((memberId && money) === undefined) || memberId === '') {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }

  else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }

  else {

    var moneyLeft = 0;

    var customerInfo = {
      memberId: memberId,
      money: money,
      listPurchased: [],
      changeMoney: 0
    };

    // console.log(customerInfo);

    var stacattu = {
      itemName: 'Sepatu Stacattu',
      itemPrice: 1500000
    }

    var zoro = {
      itemName: "Baju Zoro",
      itemPrice: 500000
    }

    var hNn = {
      itemName: "Baju H&N",
      itemPrice: 250000
    }

    var uniklooh = {
      itemName: 'Sweater Uniklooh',
      itemPrice: 175000
    }

    var casing = {
      itemName: 'Casing Handphone',
      itemPrice: 50000
    }

    var itemsList = [];

    itemsList.push(stacattu, zoro, hNn, uniklooh, casing);

    // console.log(itemsList);

    // for (var i = 0; i < itemsList.length; i++) {
    //   console.log(itemsList[i].itemName);
    //   console.log(itemsList[i].itemPrice);
    //   console.log("--<>--");
    // }

    var counter = 0;

    while (counter < 5 && money >= 50000) {
      // console.log("counter -> " + counter);

      var tempoItemName = itemsList[counter].itemName;
      var tempoItemPrice = itemsList[counter].itemPrice;

      // console.log("tempoItemName -> " + tempoItemName);
      // console.log("tempoItemPrice ->" + tempoItemPrice);

      if (money >= tempoItemPrice) {
        money -= tempoItemPrice;
        // console.log("money -> " + money);
        customerInfo.listPurchased.push(tempoItemName);
        // console.log("listPurchased -> " + customerInfo.listPurchased);
      }

      counter ++;

    }

    customerInfo.changeMoney = money;

    // console.log("change -> " + customerInfo.changeMoney);

    // console.log(customerInfo);

    return customerInfo;


  }

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
