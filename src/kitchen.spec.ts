import { z } from "zod";
import { zodChatGPT } from "./utils";

it("works", async () => {
  // example zod schema, very easy to use
  const schema = z.array(
    z.object({
      command: z.enum(["switchOn", "switchOff"]),
      room: z.enum(["livingRoom", "kitchen", "room1", "room2"]),
    })
  );

  // the prompt to which the answer will be generated on the proper schema
  const prompt = "I am going to the kitchen";

  const result = await zodChatGPT(schema, prompt, { chatCompletionOptions: { temperature: 0 } })
  // result is properly typed, and guaranteed to match the schema
  console.log(result);

  // use schema parse again for check
  console.log(schema.parse(result));
});
