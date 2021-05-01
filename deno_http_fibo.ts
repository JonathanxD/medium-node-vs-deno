import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
    fibonacci(40);
    req.respond({ body: "Fibo!\n" });
}

function fibonacci(n: number): number {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
}
