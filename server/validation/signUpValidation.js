const Joi = require('joi');

const signUpValidation = Joi.object({
  name: Joi
    .string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),
  email: Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi
    .string()
    .alphanum()
    .min(7)
    .max(15)
    .required(),
  repeatedPassword: Joi
    .ref('password'),
});

module.exports = signUpValidation;