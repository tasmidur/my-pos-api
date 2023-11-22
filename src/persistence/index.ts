import { createConnection, Connection, ConnectionOptions } from 'typeorm';

const configDev: ConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname + '/../entity/*{.ts,.js}'],
  migrations: [__dirname + '/../persistence/migration/*{.ts,.js}'],
  logging: true,
  synchronize: false
};

const configProd: ConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname + '/../entity/*{.ts,.js}'],
  migrations: [__dirname + '/../persistence/migration/*{.ts,.js}'],
  logging: true,
  synchronize: false
};

export const openConnection: any = async () => {
  const config = process.env.IS_PROD ? configProd : configDev;
  return await createConnection(config);
};
