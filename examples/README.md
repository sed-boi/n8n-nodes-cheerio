# Example n8n Workflows for Cheerio Node

This directory contains example workflows demonstrating how to use the Cheerio node in various scenarios.

## Available Examples

### 1. product-scraping-workflow.json

**Description**: Demonstrates extracting structured product data from HTML, including titles, prices, descriptions, and attributes.

**Features shown**:
- Extracting multiple elements with the same selector
- Getting element attributes (data-* attributes, ratings)
- Removing unwanted elements (scripts, navigation, footer)
- Working with different selector configurations

**Use cases**:
- E-commerce product data extraction
- Price monitoring
- Product catalog generation

### How to Use These Examples

1. **Import into n8n**:
   - Open your n8n instance
   - Go to **Workflows**
   - Click **Import from File**
   - Select the example workflow JSON file

2. **Customize**:
   - Modify the HTML input or connect to an HTTP Request node
   - Adjust selectors to match your target HTML structure
   - Add additional processing nodes as needed

3. **Test**:
   - Click "Execute workflow" to see the results
   - Inspect the output data structure

## Creating Your Own Workflows

### Basic Pattern

```
HTTP Request → Cheerio → [Process Data] → [Output]
```

### Common Workflow Patterns

#### Web Scraping

```
Schedule Trigger → HTTP Request → Cheerio → Database/Spreadsheet
```

#### Email Processing

```
Email Trigger → Extract HTML → Cheerio → Parse Data → Notification
```

#### API Data Enhancement

```
Webhook → HTTP Request → Cheerio → Enrich JSON → Response
```

## Tips for Effective Use

1. **Start Simple**: Begin with a single selector and gradually add more

2. **Use Browser DevTools**: Inspect your target HTML in a browser to find the right selectors

3. **Clean First**: Use `removeElements` to strip unnecessary HTML before parsing

4. **Test Incrementally**: Test each selector individually before combining them

5. **Handle Edge Cases**: Consider what happens with missing elements or malformed HTML

## Need Help?

- Check the [main README](../README.md) for detailed configuration options
- Review the [Cheerio documentation](https://cheerio.js.org/) for selector syntax
- See [n8n documentation](https://docs.n8n.io/) for workflow best practices
