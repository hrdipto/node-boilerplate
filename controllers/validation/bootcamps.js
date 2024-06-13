const Joi = require('joi');

exports.createBootcamp = (body) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    website: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    address: Joi.string().required(),
    careers: Joi.array().items(Joi.string()).required(),
    averageRating: Joi.number(),
  });

  return schema.validate(body);
};
