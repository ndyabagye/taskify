"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });
  revalidatePath("/organization/org_2ZDwIg8KuK67Fv8S9lYc59cu4rr");
}
