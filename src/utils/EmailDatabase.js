// Simula um banco de dados de e-mails existentes
const existingEmails = [
  "user1@example.com",
  "user2@example.com",
  "user3@example.com",
];

// Função para verificar o banco de dados simulado
export function checkEmailInDatabase(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(existingEmails.includes(email));
    }, 300); // Simula um tempo de resposta
  });
}
