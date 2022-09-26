const Joi = require('joi');

const signInValidation = Joi.object({
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
});

module.exports = signInValidation;