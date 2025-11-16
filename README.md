# n8n-nodes-cheerio

An n8n community node for parsing and extracting data from HTML using Cheerio.

## What is n8n?

[n8n](https://n8n.io/) is a fair-code licensed workflow automation platform that allows you to connect various services and automate tasks.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n documentation to install this community node.

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

## Usage Example

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

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Cheerio documentation](https://cheerio.js.org/)
- [CSS Selectors reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

## Development

```bash
# Install dependencies
npm install

# Build the node
npm run build

# Run tests
npm test
```

## License

[MIT](https://github.com/sed-boi/n8n-nodes-cheerio/blob/main/LICENSE)
