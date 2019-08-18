const Photon = require('@generated/photon')

const photon = new Photon()

async function main() {
  const user1 = await photon.users.create({
    data: {
      email: 'roland@schlaefli.com',
    },
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
