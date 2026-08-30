import zod from "zod/v4";

export const workerQuantitySchema = zod.object({
  items: zod.array(
    zod.object({
      orderItemId: zod.string(),
      submittedQuantity: zod
        .number({
          error: "Jumlah wajib diisi",
        })
        .int({
          error: "Jumlah harus bilangan bulat",
        })
        .nonnegative({
          error: "Jumlah tidak boleh negatif",
        }),
    }),
  ),
});
