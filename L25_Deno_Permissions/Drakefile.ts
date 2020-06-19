import { desc, run, task, sh } from "https://deno.land/x/drake@v1.2.3/mod.ts";

desc("Minimal Drake task");
task("hello", [], async function () {
  console.log("Hello from Drake!");

  //sh function to run Shell script, regardless of Windows, Mac, Linux OS
  //sh is an async function => Have to put await before calling sh().
  await sh("deno run --allow-env main.ts");
});

run();
