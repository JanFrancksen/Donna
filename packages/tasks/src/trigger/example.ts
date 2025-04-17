/* this is an example only. Use this as a server action to trigger a task.
"use server";

import type { addNewUser } from "@repo/tasks";
import { tasks } from "@repo/tasks/trigger";
//     👆 type only import

export async function myTask() {
  try {
    const handle = await tasks.trigger<typeof addNewUser>("add-new-user", {
      name: "Example user",
      email: "example@example.com",
    });

    return handle.id;
  } catch (error) {
    console.error(error);
    return { error: "something went wrong" };
  }
}
*/
