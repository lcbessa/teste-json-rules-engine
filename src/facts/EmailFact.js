import { checkEmailInDatabase } from "../utils/emailDatabase.js";

// Define o fato `emailExists`
const emailFact = async (params, almanac) => {
  const email = await almanac.factValue("email"); // Obtém o e-mail
  return await checkEmailInDatabase(email); // Retorna verdadeiro se o e-mail existe
};

export default emailFact;
