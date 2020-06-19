//In order to get ENV variable via Deno.env.get("USER")
//Need to Provide permission --allow-env
console.log("Hello", Deno.env.get("USER"));
