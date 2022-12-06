// task 1
// const name = "Генератор защитного поля";
// let price = 1000;
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`)

// task 2
// function checkingGoodsQuantity(ordered) {
//     const total = 100;
//     if (total < ordered) {
//         return "На складе недостаточно твоаров!"
//     } else {
//         return "Заказ оформлен, с вами свяжется менеджер"
//     }
// }
// console.log(checkingGoodsQuantity(510))

// function checkingGoodsQuantity(ordered) {
//     const total = 100;
//     return ordered > total ? "На складе недостаточно твоаров!" : "Заказ оформлен, с вами свяжется менеджер"
// }
// console.log(checkingGoodsQuantity(10))

// task 3
// const numberenterYuoPassword = prompt('Enter your password: ');
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// if (numberenterYuoPassword === null) {    
//      message = 'Отменено пользователем!'
// } else if (numberenterYuoPassword !== ADMIN_PASSWORD) {   
//      message = 'Доступ запрещен, неверный пароль!'
// } else {    
//      message = 'Добро пожаловать!'
// };
// console.log(message)

// task 4 
// const credits = 23580;
// const pricePerDroid = 3000;
// const droneQuantity = prompt('Яку кількість дронів ви хочете придбати ?');
// const total = droneQuantity * pricePerDroid;
// let message;
// if (droneQuantity === null) {    
//          message = 'Отменено пользователем!'
//     } else if (credits <= total) {   
//          message = 'Недостаточно средств на счету!'
//     } else {    
//          message = `Вы купили ${droneQuantity} дроидов, на счету осталось ${credits - total} кредитов.`
//     };
//     console.log(message)

// task 5
// const countries = {
//    китай: { name: 'Китай', price: 100 },
//    чили: { name: 'Чили', price: 250 },
//    австралия: { name: 'Австралия', price: 107 },
//    индия: { name: 'Индия', price: 80 },
//    ямайка: { name: 'Ямайка', price: 120 },
//  };
//  let alert;
//  const countryDelivery = prompt('Назвіть країну в котру потрібно зробити доставку');
//  let countryKey = countryDelivery.toLowerCase();
//  const { name, price } = countries[countryKey] || {};

//  if (name) {
//    alert = `Доставка в ${name} будет стоить ${price} кредитов`;
//  } else if (countryKey === null) {
//    alert = `Erorr`;
//  }else {
//    alert = 'В вашей стране доставка не доступна';
//  }
//  console.log(alert)

// task 6
// let alert;
// let total = 0;
// let input = prompt('Нажміть Cancel, або введіть число');
// total += Number(input);
// do {
//    // input = prompt('Нажміть Cancel, або введіть число');
//    if (Number.isNaN(input = prompt('Нажміть Cancel, або введіть число'))) {
//          alert = 'Было введено не число, попробуйте еще раз'
//          console.log(alert)
//       } else {
//          total += Number(input);
//       }
// } while (input !== null) {
//    alert = `Общая сумма чисел равна ${total}`
// }
// console.log(alert)



