module.exports = {
  preset: "ts-jest",
  testEnvironment: "node", // O 'jsdom' si es para un entorno de navegador
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
};
