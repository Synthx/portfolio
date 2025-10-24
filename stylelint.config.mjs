/** @type {import('stylelint').Config} */
const config = {
    extends: '@iampinpin/stylelint-config',
    rules: {
        'selector-class-pattern': null,
        'unit-allowed-list': ['rem', 'px', '%', 'dvh', 'dvw'],
    },
};

export default config;
