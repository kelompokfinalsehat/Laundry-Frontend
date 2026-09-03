import zod from "zod/v4";

export const workerQuantitySchema = zod.object({
  items: zod
    .array(
      zod.object({
        orderItemId: zod.uuid("ID item tidak valid!"),

        submittedQuantity: zod
          .number({
            error: "Jumlah wajib diisi",
          })
          .int({
            error: "Input harus berupa bilangan bulat!",
          })
          .nonnegative({
            error: "Input tidak boleh negatif!",
          }),
      }),
    )
    .min(1, "Minimal input 1 items!")
    .refine((items) => new Set(items.map((item) => item.orderItemId)).size === items.length, {
      message: "Order item tidak boleh duplikat!",
    }),
});
