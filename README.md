# ContentService
## Description
This service manages Articles, Article Likes, Views, Users. This microservice uses PostgreSQL and uses redis to cache the data.
## Developer Setup
### Installing dependencies
1. Install git and postgresql from Ubuntu repos
2. Download and install WebStorm/VS-code
3. Install NVM and install Node LTS (v10.15.3)
### Importing project into WebStorm (IDE)
1. Checkout the project from Github 
2. Import it into WebStorm, WS should auto-detect the package.json file and configure itself automatically.
3. TSLint should also be setup automatically via WebStorm. To check, comment out a line of code and the IDE should display `no-commented-out-code` TSLint error.
4. Copy `.env.example` into `.env` and and fill in the correct values.

#### Install the dependencies
```
npm i
```

#### Use migration to create tables
```
npm run db:migrate
```

#### Use seed command to create data in the tables
```
npm run db:seed
```
#### NPM commands
##### Linting
Command:
```
npm run prebuild
```
Linting Rules
- Palantir Recommended TSLint Rules: https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts
- `no-commented-out-code` Rule added from https://www.npmjs.com/package/tslint-no-commented-code-rule 

##### Running Unit tests
```
npm run test
```
## Code
### Project Stucture
```
└── app
    ├── config          // All configurations
    ├── constants       // Extracted out constants
    ├── controllers     // Express Controllers
    ├── database
    │   ├── migrations  // Sequelize Migrations
    │   └── seeders     // Sequelize Seeders
    ├── errors          // Errors classes, including ServiceError class
    ├── interfaces      // All interfaces used are here
    ├── locales         // Localization files
    ├── models          // Express Models
    ├── repositories    // Repositories
    ├── routes          // Express routes
    ├── services        // Express Services
    └── tests
        └── unit
            ├── controllers  // Unit tests for Controllers
            ├── repositories // Unit tests for Repositories
            └── services     // Unit Tests for Services
```
### Code Conventions
- Files are named in `UpperCamelCase`
- Classes and interfaces named using `UpperCamelCase`
- variables named using `lowerCamelCase`
