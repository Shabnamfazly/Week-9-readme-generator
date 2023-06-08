
function renderLicenseBadge(license) {

  if (license !== "None"){
    return` [![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  } 
  return ""
}

function renderLicenseLink(license) {
  if (license !== "None"){
    return `\n*[LICENSE](#license)\n`
  }
  return ""
}


function renderLicenseSection(license) {
  if (license !== "None"){
    return `This project is licensed under ${license} license`
  }
  return ""
  
}

function generateMarkdown({github , email , title, description , license, usage , fileName, installation}) {
  return `
  ${renderLicenseBadge(license)}
  
  ## TITLE
  ${title}

  ## TABLE OF CONTENTS
  *[DESCRIPTION](#description)\n
  *[EMAIL](#email)\n
  *[GITHUB](#github)\n
  *[USAGE](#usage)\n
  *[FILE NAME](#fileName)\n
  *[INSTALLATION](#installation)\n
  ${renderLicenseLink(license)}

  ## DESCRIPTION
  ${description}

  ## EMAIL
  ${email}

  ## GITHUB
  [${github}](https://github.com/${github}/)

  ## USAGE
  ${usage}

  ## FILE NAME
  ${fileName}

  ## INSTALLATION
  ${installation}

  ${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
