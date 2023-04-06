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
               autoClose: 3, //время в секундах до авто-закрытия виджета (необязательный)
               data: 
              { 
                firstName: document.getElementById("name_field").value, // прописать обращение к элементу
                lastName: document.getElementById("last_name_field").value,
                middlename: document.getElementById("middle_name_field").value,
                birth: document.getElementById("birth").value,
                address: document.getElementById("address").value,
                street: document.getElementById("street").value,
                city: document.getElementById("city").value,
                country: document.getElementById("country").value,
                phone: document.getElementById("phone").value,
                postcode: document.getElementById("postcode").value,
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
  
