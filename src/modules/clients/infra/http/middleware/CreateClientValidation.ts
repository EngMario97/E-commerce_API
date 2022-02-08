import { celebrate, Joi, Segments } from "celebrate";

const CreateClientValidation = celebrate({
    [Segments.BODY]: {
        nome: Joi.string().min(2).required(),
        cpf: Joi.string().regex(/^[0-9]{11}$/).required(),
        telefone: Joi.string().regex(/^[0-9]{11}$/).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
        data_nascimento: Joi.date().raw().required(),
    },
});

export default CreateClientValidation;