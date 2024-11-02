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


<!-- heroku run pending migrations and seeds command -->
heroku run npm run sequelize db:migrate && heroku run npm run sequelize db:seed:all

<!-- Heroku production run pending migrations -->
npm run sequelize db:seed:undo:all && npm run sequelize db:migrate:undo:all && npm run sequelize db:migrate && npm run sequelize db:seed:all

npm install && npm run render-postbuild && npm run build && npm run sequelize --prefix backend db:migrate && npm run sequelize --prefix backend db:seed:all



<!-- heroku undo all migrations and seed and redo again -->
heroku run npm run sequelize db:seed:undo:all && heroku run npm run sequelize db:migrate:undo:all && heroku run npm run sequelize db:migrate && heroku run npm run sequelize db:seed:all