const food = Deno.args[0];
const parent = Deno.args[1];

if (food === "love" && parent === "Ryan Dahl") {
  console.log("🦕 ... Deno is born");
} else {
  console.log("🥚 ... This egg needs some love");
}
//setTimeout is Deno API, not JS
setTimeout(() => {
  console.log("check");
}, 1000);
console.table(Deno.metrics());

console.log(window);
