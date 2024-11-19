import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Handles TypeScript files
    '^.+\\.jsx?$': 'babel-jest', // Handles JSX files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(your-package-name|other-package)/)', // If you need to transpile node_modules
  ],
  
};

export default config;
