import { z } from "zod";
import { zodChatGPT } from "./utils";

it("works", async () => {
  // example zod schema, very easy to use
  const schema = z.array(
    z.object({
      name: z.string(),
      text: z.string(),
    })
  );
  
  // the prompt to which the answer will be generated on the proper schema
  const prompt = "3 pirates talking about their treasure"

  const result = await zodChatGPT(schema, prompt);
  // result is properly typed, and guaranteed to match the schema
  console.log(result);

  // use schema parse again for check
  console.log(schema.parse(result));
});
