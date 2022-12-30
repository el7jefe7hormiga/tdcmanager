class CreditCard {
  constructor(name, number, expirationDate, securityCode, billingDate, paymentDate) {
    this.name = name;
    this.number = number;
    this.expirationDate = expirationDate;
    this.securityCode = securityCode;
    this.billingDate = billingDate;
    this.paymentDate = paymentDate;
  }

  get daysUntilPayment() {
    const today = new Date();
    const paymentDate = new Date(this.paymentDate);
    return Math.round((paymentDate - today) / (1000 * 60 * 60 * 24));
  }

  schedulePaymentReminder() {
    const paymentDaysUntil = this.daysUntilPayment;
    if (paymentDaysUntil <= 1) {
      sendPaymentReminderEmail(this.name, this.paymentDate);
    }
  }
}


class CreditCardManager {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  removeCard(cardNumber) {
    this.cards = this.cards.filter(card => card.number !== cardNumber);
  }

  getCard(cardNumber) {
    return this.cards.find(card => card.number === cardNumber);
  }

  sendReminders() {
    const now = new Date();
    this.cards.forEach(card => {
      if (now > card.paymentDate) {
        // Enviar un recordatorio de pago
      } else if (now > card.billingDate) {
        // Enviar un recordatorio de cierre de facturación
      }
    });
  }
}

const manager = new CreditCardManager();

const card1 = new CreditCard('John Doe', '1234 5678 9012 3456', '01/25', 123);
const card2 = new CreditCard('Jane Doe', '1234 5678 9012 3457', '02/26', 456);

manager.addCard(card1);
manager.addCard(card2);

console.log(manager.getCard('1234 5678 9012 3456')); // { name: 'John Doe', number: '1234 5678 9012 3456', expirationDate: '01/25', securityCode: 123 }

manager.removeCard('1234 5678 9012 3456');

console.log(manager.getCard('1234 5678 9012 3456')); // undefined



function sendPaymentReminderEmail(name, paymentDate) {
  // Envía un correo electrónico de recordatorio de pago utilizando el nombre y la fecha de pago de la tarjeta de crédito
  // Tu código aquí
}
const card = new CreditCard('John Doe', '1234 5678 9012 3456', '01/25', 123, '01/01', '01/15');

console.log(card.daysUntilPayment); // Devuelve el número de días hasta la fecha de pago de la tarjeta

card.schedulePaymentReminder(); // Si falta menos de un día para la fecha de pago, envía un correo electrónico de recordatorio
