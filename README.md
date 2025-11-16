# Git Branching Scenario Setups

This repository contians automations to against the website https://learngitbranching.js.org/  
The purpose of these automations is to create repeatable scenarios for giving presentations 
around git branching and other excerises around


#### pre-requisite dependencies
- node v22.19.0 (known good)

#### setup
- `npm install`

#### running scenarios
- `npm run <scenario-name>`
you can find the scenario names in the package.json file

#### creating new scenarios
- add the file in the /src/scenarios directory
- make sure the file name is unique and ends with `.spec.ts`
- add the scenario name to the package.json file.  You can use the other scenarios as an example.  You should run only one scenario at a time.
- feel free to add any new git commands to the /src/utils/commands.ts file



