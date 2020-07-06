const fastify = require('fastify')({
  logger: true
})

fastify.addSchema({
  $id: 'new-schema'
})

const start = async () => {
  try {
    await fastify.ready()
    const schemas = fastify.getSchemas()
    console.log(schemas)
    fastify.getSchema('new-schema')
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

