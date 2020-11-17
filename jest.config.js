const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/src/'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    collectCoverage: true,
    coverageReporters: ['lcov', 'html', 'text'],
    coverageDirectory: 'coverage/shared-app',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: '<rootDir>/'
    }),
    reporters: ['default']
};