// Accessing a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(projectLicense) {
    switch (projectLicense) {
      case 'None':
          return "";
          break;
      case 'MIT':
          return 'https://www.includehelp.com/foss/Images/mit.jpg';
          break;
      case 'BSD':
          return 'https://820534.smushcdn.com/1599965/wp-content/uploads/2018/05/bsd-new-e1525318024116.png';
          break;
      case 'Apache 2.0':
          return 'http://www.activesplit.com/wp-content/uploads/2010/03/apache-logo.jpg';
          break;
  }
}

// Accessing the license information link
// If there is no license, return an empty string
function renderLicenseLink(projectLicense) {
  switch (projectLicense) {
    case 'None':
        return "";
        break;
    case 'MIT':
        return 'https://opensource.org/licenses/MIT';
        break;
    case 'BSD':
        return 'https://opensource.org/licenses/BSD-3-Clause';
        break;
    case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
        break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(projectLicense) {
    return projectLicense !== "none" ? `${projectLicense}\n${renderLicenseLink(projectLicense)}` : "";
  }

// Generation of markdown for README
function generateMarkdown(data) {
    const githubPage = `https://github.com/${data.username}`

  return `# ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ## Table of Contents
  - [Installation](#installation)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.projectRequirements}
  
  ## Usage
  ${data.projectUsage}
  
  ## License
  ${data.projectLicense}
  
  ## Contribution
  ${data.projectContribution}

  ## Questions
  For any questions please reach out to me at ${data.projectEmail}.
  You can also view more projects at ${githubPage}.
`;
}

module.exports = generateMarkdown;
