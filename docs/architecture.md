# Architecture

- **CLI Layer**: Handles commands and options
- **Core Engine**: Traverses files, parses code, sends to OpenAI
- **Plugins**: Define custom linting and style rules
- **Output Handlers**: Render results in various formats
- **Logger**: Structured logs, metrics collection
- **Config**: Extensible via JS/JSON

![](architecture-diagram.png)
