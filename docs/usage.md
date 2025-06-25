# Usage Guide

## CLI Commands

- `review <path>`: Review code at path
- `init`: Generate default config
- `plugin:install <plugin>`: Install plugin

## Config File

Use `aireview.config.js` to customize:
```js
module.exports = {
  openaiModel: 'gpt-4o-mini',
  threshold: 0.75,
  languages: ['js','ts','py'],
  output: ['json','html'],
  plugins: ['./plugins/sample-plugin.js'],
};
```
