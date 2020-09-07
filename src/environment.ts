const defaultPort = 3000

interface Environment {
  port: number | string
  db: {
    url: string
  }
}

export const environment: Environment = {
  port: process.env.PORT || defaultPort,
  db: {
    url: `mongodb://db:${process.env.DB_PORT}`,
  },
}
