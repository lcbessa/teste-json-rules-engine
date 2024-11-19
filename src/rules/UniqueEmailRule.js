// Regra para verificar se o e-mail é único
const emailRule = {
  conditions: {
    all: [
      {
        fact: "emailExiste",
        operator: "equal",
        value: false, // Queremos que `emailExiste` seja falso para indicar que o e-mail é único
      },
    ],
  },
  event: {
    type: "emailUnico",
    params: {
      message: "O e-mail está disponível para uso.",
    },
  },
};

export default emailRule;
