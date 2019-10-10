'use strict';

const bankProductRecomendation = (age, student, income = 0) => {
  let accountType = [];
  if (student.toUpperCase() === 'YES') {
    if (age > CONDITION.AGE.MINOR) {
      accountType.push('Student Account');
      if (income > CONDITION.INCOME.RANGE1) {
        accountType.push('Credit Card');
      }
    } else {
      accountType.push('Junior Saver Account'); // But this shouldn't be a student
    }
  } else if (student.toUpperCase() === 'NO') {
    switch (true) {
      case age > CONDITION.AGE.MINOR && income > CONDITION.INCOME.RANGE2:
        accountType.push('Current Account Plus');
        accountType.push('Gold Credit Card');
        accountType.push('Current Account');
        accountType.push('Credit Card');
        break;
      case age > CONDITION.AGE.MINOR && income > CONDITION.INCOME.RANGE1:
        accountType.push('Credit Card');
        accountType.push('Current Account');
        break;
      case age > CONDITION.AGE.MINOR && income > CONDITION.INCOME.ZERO:
        accountType.push('Current Account');
        break;
      default:
        break;
    }
  }
  if (!accountType.includes('Junior Saver Account') && accountType.length > 0) {
    accountType.push('Debit Card'); // Pensioner Account doesn't exists.
  }
  const recomendations = [];
  Object.entries(BUNDLES).forEach((bundles) => {
    let flag = true;
    bundles[1].PRODUCTS_INCLUDED.forEach((type) => {
      flag = flag && accountType.includes(type);
    });
    if (flag) {
      recomendations.push(bundles[1].VALUE);
    }
  });
  return recomendations;

}

const CONDITION = {
  AGE: {
    MINOR: 17,
    ADULT: 64,
    SENIOR: 65
  },
  INCOME: {
    ZERO: 0,
    RANGE1: 12000,
    RANGE2: 40000,
    HIGH: 40001
  }
}

const BUNDLES = {
  JUNIOR_SAVER: {
    VALUE: 0,
    PRODUCTS_INCLUDED: ['Junior Saver Account']
  },
  STUDENT: {
    VALUE: 0,
    PRODUCTS_INCLUDED: ['Student Account', 'Debit Card'],
  },
  STUDENT_PLUS: {
    VALUE: 0,
    PRODUCTS_INCLUDED: ['Student Account', 'Debit Card', 'Credit Card'],
  },
  CLASSIC: {
    VALUE: 1,
    PRODUCTS_INCLUDED: ['Current Account', 'Debit Card'],
  },
  CLASSIC_PLUS: {
    VALUE: 2,
    PRODUCTS_INCLUDED: ['Current Account', 'Debit Card', 'Credit Card'],
  },
  GOLD: {
    VALUE: 3,
    PRODUCTS_INCLUDED: ['Current Account Plus', 'Debit Card', 'Gold Credit Card']
  }
}

const product = (request, response) => {
  const {
    age,
    student,
    income
  } = request.body;
  const result = bankProductRecomendation(age, student, income);
  const RecomendedProduct = result.reverse().shift(); // Rest all can be sended as suggested products.
  response.status(200).json({
    RecomendedProduct
  });
}

module.exports = {
  product,
  bankProductRecomendation
}
