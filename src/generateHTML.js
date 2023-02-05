


function generateHTML(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}
  ## Description
  ${data.Description}

---

  ## Table of Contents  

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

---

  ## Installation
  ${data.Installation}

---

  ## Usage
  ${data.Usage}

---

  ## License
  ${renderLicenseSection(data.License)}
  
---

  ## Contributing
  ${data.Contributing}

---

  ## Tests 
  ${data.Tests}

---

  ## Questions
  If you have any questions about the project, open an issue at [${data.Github}](https://www.github.com/${data.Github}) or send an email to ${data.Email}.

`;
};

module.exports = generateHTML;