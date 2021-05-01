 
# Vegeta attack

The command below was used to execute vegeta attacks against node and deno.

```bash
echo "GET http://localhost:$PORT" | vegeta attack -duration=120s -rate=$RATE -output=attack.bin
```
