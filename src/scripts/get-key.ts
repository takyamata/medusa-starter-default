import { ExecArgs } from "@medusajs/framework/types";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

export default async function getPublishableKey({ container }: ExecArgs) {
    const query = container.resolve(ContainerRegistrationKeys.QUERY);
    const { data: apiKeys } = await query.graph({
        entity: "api_key",
        fields: ["token", "title"],
        filters: {
            type: "publishable"
        }
    });

    console.log("Found Publishable Keys:");
    apiKeys.forEach(k => console.log(`${k.title}: ${k.token}`));
}
