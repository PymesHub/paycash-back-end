// Swagger/OpenAPI-compatible types for CreateCommand

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateCommand:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del usuario.
 *           example: "John"
 *         lastName:
 *           type: string
 *           description: Apellido del usuario.
 *           example: "Doe"
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico del usuario.
 *           example: "john.doe@example.com"
 *         birthday:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del usuario (YYYY-MM-DD).
 *           example: "1990-01-01"
 *         genre:
 *           type: string
 *           enum: [male, female, other]
 *           description: Género del usuario.
 *           example: "male"
 */
export interface CreateCommand {
  name: string;
  lastName: string;
  email: string;
  birthday: string;
  genre: "male" | "female" | "other";
}
