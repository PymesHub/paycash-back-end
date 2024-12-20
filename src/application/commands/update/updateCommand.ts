import { z } from "zod";
import { throwError } from "../../../utils/responseTemplate";

const UpdateCommandSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "El nombre es obligatorio"),
  lastName: z.string().min(1, "El apellido es obligatorio"),
  email: z.string().email("El correo electrónico no es válido"),
  birthday: z
    .string()
    .refine(
      (date) => !isNaN(Date.parse(date)),
      "La fecha de nacimiento no es válida",
    ),
  genre: z.enum(["male", "female", "other"]),
});
export class UpdateCommand {
  constructor(
    readonly id: string,
    readonly name: string,
    public lastName: string,
    public email: string,
    public birthday: string,
    public genre: string,
  ) {}

  static create(data: string): UpdateCommand {
    const result = UpdateCommandSchema.safeParse(JSON.parse(data));
    if (!result.success) {
      throwError(
        400,
        "Bad request",
        JSON.stringify(result.error.formErrors.fieldErrors),
      );
    }

    const parsedData = result.data;
    return new UpdateCommand(
      parsedData?.id ?? "",
      parsedData?.name ?? "",
      parsedData?.lastName ?? "",
      parsedData?.email ?? "",
      parsedData?.birthday ?? "",
      parsedData?.genre ?? "",
    );
  }
}
