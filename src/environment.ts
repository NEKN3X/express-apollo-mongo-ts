interface Environment {
  port: number | string
  db: {
    url: string
    name: string
  }
}

export const environment: Environment = {
  port: process.env.PORT || 3000,
  db: {
    url: `mongodb://db:${process.env.DB_PORT}`,
    name: process.env.DB_NAME || 'example',
  },
}
