#!/usr/bin/env node

import { program } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { createProject } from '../lib/create.js';
import { VERSION, TEMPLATE_CHOICES } from '../lib/constants.js';

program
  .version(VERSION, '-v, --version')
  .description('Sunbyte CLI - A modern frontend project scaffolding tool');

program
  .command('create <project-name>')
  .description('Create a new project')
  .action(async (projectName) => {
    try {
      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'template',
          message: 'Select a project template:',
          choices: TEMPLATE_CHOICES
        }
      ]);

      const spinner = ora('Creating project...').start();
      
      try {
        await createProject(projectName, answers.template);
        spinner.succeed(chalk.green(`Successfully created project ${projectName}`));
        console.log('\nNext steps:');
        console.log(chalk.cyan(`  cd ${projectName}`));
        console.log(chalk.cyan('  npm install'));
        console.log(chalk.cyan('  npm run dev'));
      } catch (error) {
        spinner.fail(chalk.red(`Failed to create project: ${error.message}`));
        console.error(chalk.red(error.stack));
      }
    } catch (error) {
      console.error(chalk.red('Error during project creation:'), error.message);
    }
  });

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

program.parse(process.argv);