# Replicates missing getSchema in fastify 2.15.1

## To replicate

```
npm i
```

```
node app.js
```

Output will be:

```
// output of getSchemas() showing schema has been added
{
  'new-schema': { '$id': 'new-schema', [Symbol(fastify.schemaVisited)]: true }
}
// log message of error is fastify.getSchema is not a function
{"level":50,"time":1594078320076,"pid":11439,"hostname":"Honor_9_Lite-73e196f90314.localdomain","msg":"fastify.getSchema is not a function","stack":"TypeError: fastify.getSchema is not a function\n    at start (/Users/estone/Projects/autotelic/replicate-missing-get-schema/app.js:14:13)\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)","type":"Error","v":1}
```
