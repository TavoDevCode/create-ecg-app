import { app } from './app'
import { connectPostgresDatabase } from './configs'
import { PORT } from './utils'

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT} 🚀!`) // eslint-disable-line no-console
})

connectPostgresDatabase().catch(e => console.log(e)) // eslint-disable-line no-console
