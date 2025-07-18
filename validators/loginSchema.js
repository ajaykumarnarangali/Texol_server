const Joi = require('joi');

const userLoginSchema = Joi.object({
    password: Joi.string().min(6).required().messages({
        'string.min': 'Password must be at least 6 characters',
        'string.empty': 'Password is required',
        'any.required': 'Password is required',
    }),
    countryCode: Joi.string().pattern(/^\+\d{1,4}$/).required().messages({
        'string.pattern.base': 'Country code must start with "+" followed by 1 to 4 digits (e.g., +91)',
        'string.empty': 'Country code is required',
        'any.required': 'Country code is required',
    }),
    phone: Joi.string().pattern(/^\d{6,10}$/).required().messages({
        'string.pattern.base': 'Phone must be 6 to 10 digits',
        'string.empty': 'Phone is required',
        'any.required': 'Phone is required',
    })
});


module.exports = userLoginSchema;
