const Joi = require('joi');

const userSignupSchema =Joi.object({
    username: Joi.string().min(3).required().messages({
        'string.base': 'Username must be a string',
        'string.empty': 'Username is required',
        'string.min': 'Username must be at least 3 characters',
        'any.required': 'Username is required',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email',
        'string.empty': 'Email is required',
        'any.required': 'Email is required',
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': 'Password must be at least 6 characters',
        'string.empty': 'Password is required',
        'any.required': 'Password is required',
    }),
    role: Joi.string().valid('employee', 'student').required().messages({
        'any.only': 'Role must be either employee or student',
        'string.empty': 'Role is required',
        'any.required': 'Role is required',
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
    }),
});


module.exports = userSignupSchema;
