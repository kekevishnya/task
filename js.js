function pay() {
    var widget = new cp.CloudPayments();
       widget.pay('charge', // или 'charge'
           { //options
               publicId: 'pk_7f9fe7a27555c1f2ec5ceada550d4', //id из личного кабинета
               description: 'Оплата товаров в example.com', //назначение
               amount: 100, //сумма
               currency: 'RUB', //валюта
               accountId: 'user@example.com', //идентификатор плательщика (необязательно)
               InvoiceId: '1234567', 
               email: 'user@example.com', //email плательщика (необязательно)
               skin: "mini", //дизайн виджета (необязательно)
               autoClose: 10, //время в секундах до авто-закрытия виджета (необязательный)
               data: {
                   myProp: 'myProp valuße'
               },
               payer: { 
                firstName: 'Тест',
                lastName: 'Тестов',
                middleName: 'Тестович',
                birth: '1955-02-24',
                address: 'тестовый проезд дом тест',
                street: 'Lenina',
                city: 'MO',
                country: 'RU',
                phone: '123',
                postcode: '345'
               }
           },
           {
               onSuccess: function (options) {
              success
                   //действие при успешной оплате
               },
               onFail: function (reason, options) { // fail
                   //действие при неуспешной оплате
               },
               onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
                   //например вызов вашей аналитики Facebook Pixel
               }
           }
       )
   };