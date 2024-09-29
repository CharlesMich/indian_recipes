<!-- development build command -->

<!-- new seed -->
npx sequelize-cli seed:generate --name <descriptive name>

<!-- run pending migrations -->
npx dotenv sequelize-cli db:migrate

<!-- run pending seeds -->
npx dotenv sequelize-cli db:seed:all

<!-- undo single migration -->
npx dotenv sequelize-cli db:migrate:undo

<!-- undo all migrations -->
npx dotenv sequelize-cli db:migrate:undo:all

<!-- undo a single seed -->
npx dotenv sequelize-cli db:seed:undo

<!-- undo all seeds -->
npx dotenv sequelize-cli db:seed:undo:all

<!-- create model and migration -->
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

<!-- create new seeder file -->
npx sequelize-cli seed:generate --name demo-cart