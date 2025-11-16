# Quick Start Guide

Get up and running with n8n-nodes-cheerio in minutes!

## For n8n Users

### 1. Install the Node

**In n8n UI** (Recommended):
1. Go to **Settings** > **Community Nodes**
2. Click **Install**
3. Enter: `n8n-nodes-cheerio`
4. Click **Install**
5. Wait for installation to complete

**Manual Installation**:
```bash
cd ~/.n8n/nodes
npm install n8n-nodes-cheerio
```

### 2. Find the Node

After installation, restart n8n if needed. The **Cheerio** node will appear in your node palette under the "Transform" category.

### 3. Create Your First Workflow

1. **Add a Manual Trigger**: Drag "When clicking 'Test workflow'" to your canvas

2. **Add the Cheerio Node**: Search for "Cheerio" and add it to your workflow

3. **Configure the HTML Input**:
   ```html
   <div class="example">
     <h1>Hello World</h1>
     <p class="description">This is a test</p>
   </div>
   ```

4. **Add a Selector**:
   - Name: `title`
   - CSS Selector: `h1`
   - Return Single Item: ✓

5. **Execute the Workflow**: Click "Test workflow"

6. **View Results**: You should see:
   ```json
   {
     "results": {
       "title": "Hello World"
     },
     "totalElements": 1,
     "selectors": 1
   }
   ```

### 4. Common Patterns

#### Extract from HTTP Response

```
HTTP Request → Cheerio → Process Data
```

#### Web Scraping Schedule

```
Schedule Trigger → HTTP Request → Cheerio → Spreadsheet/Database
```

## For Developers

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/sed-boi/n8n-nodes-cheerio.git
cd n8n-nodes-cheerio

# Install dependencies
npm install

# Build
npm run build

# Test
npm test

# Lint
npm run lint
```

### Test Locally in n8n

```bash
# In this project directory
npm run build
npm link

# In your n8n installation directory
npm link n8n-nodes-cheerio
npm start
```

### Make Changes

```bash
# Watch mode for development
npm run dev

# Make your changes in nodes/Cheerio/Cheerio.node.ts

# Test your changes
npm test

# Rebuild
npm run build
```

## Quick Reference

### Most Common Selectors

| Pattern | Example | Description |
|---------|---------|-------------|
| `element` | `p`, `div`, `span` | Select by tag name |
| `.class` | `.product`, `.title` | Select by class |
| `#id` | `#header`, `#main` | Select by ID |
| `[attr]` | `[data-id]`, `[href]` | Select by attribute |
| `parent > child` | `div > p` | Direct children only |
| `ancestor descendant` | `div p` | All descendants |

### Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| **HTML** | string | The HTML to parse (required) |
| **Selectors** | array | CSS selectors to extract data (required) |
| **Name** | string | Identifier for the extracted data |
| **CSS Selector** | string | Standard CSS selector syntax |
| **Attribute** | string | Specific attribute to extract (optional) |
| **Trim Text** | boolean | Remove whitespace (default: true) |
| **Return Single Item** | boolean | Get only first match (default: false) |
| **Return HTML** | boolean | Get HTML instead of text (default: false) |
| **Remove Elements** | string | Comma-separated selectors to remove |

## Troubleshooting

### Node Not Appearing

- Restart n8n after installation
- Check **Settings** > **Community Nodes** to verify installation
- Check n8n logs for errors

### No Results

- Verify your HTML is valid
- Test selectors in browser DevTools first
- Check for typos in selector syntax
- Ensure elements exist in the HTML

### Wrong Data

- Use `returnHTML: true` to see what's being selected
- Add `console.log` in browser to test selectors
- Check if whitespace needs trimming

## Next Steps

- 📚 Read the [full README](README.md) for detailed documentation
- 🔍 Explore [example workflows](examples/)
- 💻 Check [contribution guidelines](CONTRIBUTING.md) to contribute
- 🐛 [Report issues](https://github.com/sed-boi/n8n-nodes-cheerio/issues) on GitHub

## Need Help?

- [n8n Community Forum](https://community.n8n.io/)
- [Cheerio Documentation](https://cheerio.js.org/)
- [CSS Selectors Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [GitHub Issues](https://github.com/sed-boi/n8n-nodes-cheerio/issues)
