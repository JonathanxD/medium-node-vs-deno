# JMeter Benchmark

JMeter benchmarks was executed from CLI and exported to a HTML page. The number of threads was changed manually before running each benchmark.

## Node vs Deno

```bash
jmeter -n -t ./Node\ vs\ Deno.jmx -l results -e -o ./web_results/
```

## Ktor

```bash
jmeter -n -t ./Ktor\ Plan.jmx -l ktor_results -e -o ./ktor_web_results/
```
