import { z } from "zod";
import { v4 as uuid } from "uuid";
import { throwError } from "../../../utils/responseTemplate";

const CreateCommandSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  lastName: z.string().min(1, "El apellido es obligatorio"),
  email: z.string().email("El correo electrónico no es válido"),
  birthday: z
    .string()
    .refine(
      (date) => !isNaN(Date.parse(date)),
      "La fecha de nacimiento no es válida",
    ),
  genre: z
    .enum(["male", "female", "other"])
    .refine((value) => ["male", "female", "other"].includes(value), {
      message: "El género no es válido",
    }),
});
export class CreateCommand {
  constructor(
    readonly id: string,
    readonly name: string,
    public lastName: string,
    public email: string,
    public birthday: string,
    public genre: string,
    public statusPLD: string,
  ) {}

  static create(data: string): CreateCommand {
    const result = CreateCommandSchema.safeParse(JSON.parse(data));
    if (!result.success) {
      throwError(
        400,
        "Bad Request",
        JSON.stringify(result.error.formErrors.fieldErrors),
      );
    }

    const parsedData = result.data;
    return new CreateCommand(
      uuid(),
      parsedData?.name ?? "",
      parsedData?.lastName ?? "",
      parsedData?.email ?? "",
      parsedData?.birthday ?? "",
      parsedData?.genre ?? "",
      "pending",
    );
  }
}
