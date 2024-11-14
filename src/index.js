// import { conditions, event } from "./rules/EmailRules";
import { Engine } from "json-rules-engine";
import emailRule from "./rules/EmailRule";
import emailFact from "./facts/EmailFact";

//Cria o motor de regras
const engine = new Engine();

// engine.addRule({ conditions, event });
engine.addRule(emailRule);
engine.addFact("emailExiste", emailFact);

//Subscrição para sucesso
engine.on("success", (event, almanac) => {
  if (event.type === "emailUnico") {
    console.log(event.params.message);
  }
});

// Subscrição para falha
engine.on("failure", async (event, almanac) => {
  const email = await almanac.factValue("email");
  console.log(`O e-mail ${email} já está em uso.`);
});

// Executa o motor com o e-mail a ser verificado
engine.run({ email: "user1@example.com" });
