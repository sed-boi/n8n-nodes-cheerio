# n8n-nodes-cheerio

An n8n community node for parsing and extracting data from HTML using Cheerio. Perfect for web scraping, HTML parsing, and data extraction workflows.

[n8n](https://n8n.io/) is a fair-code licensed workflow automation platform.

[![npm version](https://img.shields.io/npm/v/n8n-nodes-cheerio)](https://www.npmjs.com/package/n8n-nodes-cheerio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[📚 Quick Start Guide](QUICKSTART.md) | [📖 Full Documentation](#configuration) | [💻 Examples](examples/)

## Table of Contents

- [Installation](#installation)
- [Operations](#operations)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Community Nodes (Recommended)

1. Go to **Settings > Community Nodes** in your n8n instance
2. Select **Install**
3. Enter `n8n-nodes-cheerio` in the **Enter npm package name** field
4. Agree to the [risks](https://docs.n8n.io/integrations/community-nodes/risks/) of using community nodes
5. Select **Install**

After installation, the Cheerio node will appear in your node palette.

### Manual Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n documentation to install community nodes manually.

## Operations

The Cheerio node allows you to:

- Extract text content using CSS selectors
- Extract HTML content using CSS selectors
- Extract element attributes
- Remove unwanted elements before parsing
- Process multiple selectors in a single operation
- Return single items or arrays of matched elements

## Configuration

### Inputs

- **HTML**: The HTML content to parse
- **Selectors**: One or more selector configurations
  - **Name**: Identifier for the extracted data
  - **CSS Selector**: Standard CSS selector syntax
  - **Attribute**: (Optional) Specific attribute to extract
  - **Trim Text**: Remove whitespace from results
  - **Return Single Item**: Get only the first match
  - **Return HTML**: Get HTML instead of text content
- **Remove Elements**: (Optional) CSS selectors for elements to remove before parsing

### Output

Returns a JSON object with:
- `results`: Extracted data organized by selector names
- `totalElements`: Count of all matched elements
- `selectors`: Number of selectors processed

## Usage Examples

### Basic Example: Extract Product Information

Input data:
```json
{
  "html": "<div class='product'><h2>Product Name</h2><span class='price'>$99</span></div>",
  "selectors": [
    {
      "name": "productName",
      "selector": "h2",
      "singleItem": true
    },
    {
      "name": "price",
      "selector": ".price",
      "singleItem": true
    }
  ]
}
```

Result:
```json
{
  "results": {
    "productName": "Product Name",
    "price": "$99"
  },
  "totalElements": 2,
  "selectors": 2
}
```

### Advanced Example: Multiple Elements and Attributes

Extract links and titles from a blog post list:

```json
{
  "html": "<div class='posts'><article><a href='/post1' class='title'>First Post</a></article><article><a href='/post2' class='title'>Second Post</a></article></div>",
  "selectors": [
    {
      "name": "titles",
      "selector": "a.title",
      "singleItem": false
    },
    {
      "name": "links",
      "selector": "a.title",
      "attribute": "href",
      "singleItem": false
    }
  ]
}
```

Result:
```json
{
  "results": {
    "titles": ["First Post", "Second Post"],
    "links": ["/post1", "/post2"]
  },
  "totalElements": 4,
  "selectors": 2
}
```

### Removing Unwanted Elements

Clean HTML before parsing by removing scripts and styles:

```json
{
  "html": "<div><script>alert('hi');</script><h1>Title</h1><style>.red{color:red}</style><p>Content</p></div>",
  "removeElements": "script, style",
  "selectors": [
    {
      "name": "content",
      "selector": "div",
      "returnHTML": true,
      "singleItem": true
    }
  ]
}
```

## Common Use Cases

- **Web Scraping**: Extract product data, prices, or articles from websites
- **Data Transformation**: Parse HTML emails or documents into structured data
- **Content Migration**: Extract content from legacy HTML systems
- **API Response Parsing**: Handle HTML responses from APIs
- **Testing**: Validate HTML structure in automated testing workflows

## Example Workflows

Check out the [examples directory](./examples/) for complete n8n workflow examples demonstrating:
- Product data extraction from e-commerce pages
- Removing unwanted HTML elements
- Working with attributes and multiple selectors

Import these workflows directly into your n8n instance to get started quickly.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Cheerio documentation](https://cheerio.js.org/)
- [CSS Selectors reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

## Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/sed-boi/n8n-nodes-cheerio.git
cd n8n-nodes-cheerio

# Install dependencies
npm install

# Build the node
npm run build

# Run tests
npm test

# Run linter
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

### Local Development

To test the node locally in n8n:

1. Build the package: `npm run build`
2. Link it to n8n: `npm link` in this directory
3. In your n8n installation directory: `npm link n8n-nodes-cheerio`
4. Start n8n: `npm start`

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm test -- --watch
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Reporting Issues

If you encounter any issues, please [create an issue](https://github.com/sed-boi/n8n-nodes-cheerio/issues) on GitHub with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your n8n version and environment details

## License

[MIT](https://github.com/sed-boi/n8n-nodes-cheerio/blob/main/LICENSE)
