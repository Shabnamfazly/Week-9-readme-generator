// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  if (license === 'MIT'){
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === 'APACHE 2.0'){
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else {
    licenseBadge = ""
  }
  return licenseBadge;
  {
    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({github , email , title, description , license}) {
  return `
  ${renderLicenseBadge(license)}
  
  ## TITLE
  ${title}

  ## DESCRIPTION
  ${description}

  ## EMAIL
  ${email}

  ## GITHUB
  ${github}

`;
}

module.exports = generateMarkdown;
