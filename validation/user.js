const Joi = require('joi');
// phone: myCustomJoi.string().phoneNumber({ format: 'international' }).required(),
// const myCustomJoi = Joi.extend(require('joi-phone-number'));

const userSignUpSchema = Joi.object({
  firstname: Joi.string().min(3).max(100).required(),
  lastname: Joi.string().min(3).max(100).required(),
  businessname: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  location: Joi.string().min(3).max(100).required(),
});

const userloginSchema = Joi.object({
  businessname: Joi.string().min(3).max(100).required(),
  email: Joi.string().email(),
  password: Joi.string().min(8).required(),
});

module.exports = {
  userSignUpSchema,
  userloginSchema,
};
