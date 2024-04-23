module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"plugin:vue/vue3-essential",
		"@vue/eslint-config-standard",
		"@vue/typescript/recommended",
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		"no-tabs": 0,
		indent: "off", // Disable indentation checking
		quotes: "off", // Disable singlequote checking
		"comma-dangle": "off", // Disable trailing comma checking
		semi: "off", // Disable semicolon checking
		"no-trailing-spaces": "off", // Disable trailing spaces checking
		"no-mixed-spaces-and-tabs": "off", // Disable mixed spaces and tabs checking
		"no-multiple-empty-lines": "off", // Disable multiple empty lines checking
		"eol-last": "off", // Disable checking for newline at the end of file
	},
};
