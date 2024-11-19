// src/controllers/RulesController.js
import { Engine } from "json-rules-engine";
import FactsService from "../services/FactsService.js";
import emailRule from "../rules/UniqueEmailRule.js";
import axios from "axios";

const engine = new Engine();

// Adicione a regra de email único
engine.addRule(emailRule);

export async function processRules(request, response) {
  const { fatos } = request.body;
  console.log(fatos);
  console.log("fatos email", fatos.email);
  try {
    // Chama o serviço para buscar o fato necessário
    // const facts = await FactsService.getFacts(fatos);
    const resposta = await axios.get("http://localhost:3000/verificar-email/", {
      params: { email: fatos.email },
    });

    console.log("fatos", resposta.data);
    engine.addFact(resposta.data.sucess);

    response.status(200).json({
      sucess: resposta.data.sucess,
      emailRule: emailRule.event.params.message,
    });
  } catch (error) {
    console.log("entrou no catch");

    response.status(500).json({ error: error.message });
  }
}
