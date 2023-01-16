const indexImport = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';

  if(license == 'N/A') {
    licenseBadge = '';
  } else if (license == 'MIT License') {
    licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license == 'Eclipse') {
    licenseBadge = '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)'
  } else if (license == 'Apache') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license == 'Boost') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';

  if(license == 'N/A') {
    licenseLink = '';
  } else if (license == 'MIT License') {
    licenseLink = '(https://opensource.org/licenses/MIT)'
  } else if (license == 'Eclipse') {
    licenseLink = '(https://opensource.org/licenses/EPL-1.0)'
  } else if (license == 'Apache') {
    licenseLink = '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license == 'Boost') {
    licenseLink = '(https://www.boost.org/LICENSE_1_0.txt)'
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';

  if(license === 'N/A') {
    licenseSection = ''
  } else {
    licenseSection = `license : ${license}`
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ## Table of Contents:

  * [Description] (#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [License](#license)
  
  # Description
  - ${data.description}

  # Installation
  - ${data.installation}

  ## Usage
  - ${data.usage}

  ## License
  - ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  - ${renderLicenseLink(data.license)}

  ## Contributions
  - ${data.contributions}

  ## Tests
  - ${data.tests}

  ## Questions
  - Contact me
  - Github: https://github.com/${data.github}
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
