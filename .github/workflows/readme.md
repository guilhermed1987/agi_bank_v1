# Test automation – Blog do Agi

Automated end-to-end tests using [Cypress] for Agibank Blog funcional test
with CI/CD integration via GitHub Actions and report using [Mochawarome]


## Automated scenarios

- Search for a parameter ('beneficios' and 'serviços').
- Make the assert for H1 (if the has the parameter of the serach on the search).
- Make assert for H2 (if it has 'Se inscreva em nossa Newsletter')

## Structure

├── cypress/
│ └── e2e/ qa_api.cy.js # API tests for Dog API
│ └── e2e/ qa_web.cy.js # UI tests
├── cypress.config.js # Cypress configuration
├── .github/
│ └── workflows/
│ └── cypress.yml # GitHub Actions workflow
├── package.json

## Main scenarios:

DOG API testing
1. List of all dog breeds throught a GET request GET https://dog.ceo/api/breeds/list/all
2. Returns images for selected hound throught a GET https://dog.ceo/api/breed/hound/images
3. Returns a random dog image throught a GET https://dog.ceo/api/breeds/image/random

Web search testing
1. Clear cache and storage before test execution
2. Trigger the search field using the search icon
3. Type a search term and submit
4. Validate that the page title (`h1`) matches the searched term
5. Ensure that a section with `h2.widget-title` contains: `Se inscreva em nossa Newsletter`

### Dependencies

- Node.js >= 14
- npm or yarn

### Instalation

### 1️ Clone the repository
git clone https://github.com/guilhermed1987/agi_bank_v1.git
cd agi_bank_v1
npm install

### 2 Install the dependencies
npm install

### 3 Run the tests (headless)
npx cypress run


