# AI Code Review Pro

AI Code Review Pro is a powerful, extensible CLI tool and GitHub Action for automated code review powered by OpenAI.  
It offers:

- Modular architecture with plugin support
- Multilingual review: JavaScript, TypeScript, Python, Go, Rust, Java
- Configurable rules and thresholds
- JSON, HTML, Markdown, and terminal outputs
- Detailed logging and metrics
- Built-in test suite and CI integration

## Quick Start

1. Clone repository  
2. Install dependencies: `npm install`  
3. Copy `.env.example` to `.env` and set `OPENAI_API_KEY`  
4. Run review: `npx ai-review-pro review src/ --output html`  
5. Add GitHub Action CI: see `.github/workflows/ci.yml`

For full documentation, see the **docs/** folder.
