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