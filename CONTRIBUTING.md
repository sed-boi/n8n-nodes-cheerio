# Contributing to n8n-nodes-cheerio

Thank you for your interest in contributing to n8n-nodes-cheerio! This document provides guidelines and information for contributors.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Environment details** (n8n version, Node.js version, OS)
- **Error messages** or logs

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear and descriptive title
- Provide a detailed description of the suggested enhancement
- Explain why this enhancement would be useful
- Include code examples if applicable

### Pull Requests

1. **Fork** the repository
2. **Create a branch** from `development`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**:
   - Follow the code style guidelines
   - Add or update tests as needed
   - Update documentation if needed
4. **Test your changes**:
   ```bash
   npm test
   npm run lint
   npm run build
   ```
5. **Commit your changes**:
   - Use clear, descriptive commit messages
   - Follow conventional commits format: `feat:`, `fix:`, `docs:`, `test:`, etc.
6. **Push to your fork** and submit a pull request to the `development` branch

## Development Guidelines

### Code Style

- Use TypeScript for all code
- Follow the existing code style (enforced by Biome)
- Run `npm run lint:fix` before committing
- Ensure all types are properly defined

### TypeScript Standards

- Use explicit types for function parameters and return values
- Avoid using `any` type
- Use interfaces for object shapes
- Follow n8n's type definitions for node implementations

### Testing

- Write tests for new features
- Ensure existing tests pass
- Aim for good test coverage
- Test files should be named `*.test.ts`

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `test:` Adding or updating tests
- `refactor:` Code refactoring
- `chore:` Maintenance tasks

Examples:
```
feat: add support for extracting data attributes
fix: handle empty HTML input gracefully
docs: update README with new examples
test: add tests for attribute extraction
```

### Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for public APIs
- Include code examples for new features
- Update TypeScript types and interfaces

## Project Structure

```
n8n-nodes-cheerio/
├── nodes/
│   └── Cheerio/
│       ├── Cheerio.node.ts       # Node implementation
│       ├── Cheerio.node.test.ts  # Unit tests
│       └── cheerio.svg           # Node icon
├── dist/                         # Compiled output (generated)
├── package.json                  # Package configuration
├── tsconfig.json                 # TypeScript configuration
├── biome.json                    # Linter configuration
├── jest.config.js                # Test configuration
└── gulpfile.js                   # Build tasks
```

## Building and Testing

### Local Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode (watch mode)
npm run dev

# Run tests
npm test

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix
```

### Testing in n8n

To test your changes in a local n8n instance:

1. Build the package:
   ```bash
   npm run build
   ```

2. Link the package:
   ```bash
   npm link
   ```

3. In your n8n installation directory:
   ```bash
   npm link n8n-nodes-cheerio
   ```

4. Restart n8n

## Release Process

Releases are managed by the repository maintainers. The process includes:

1. Update version in `package.json`
2. Update CHANGELOG.md (if present)
3. Create a git tag
4. Publish to npm
5. Create a GitHub release

## Questions?

If you have questions about contributing, feel free to:

- Open an issue for discussion
- Check existing issues and pull requests
- Review the [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

## License

By contributing to n8n-nodes-cheerio, you agree that your contributions will be licensed under the MIT License.
