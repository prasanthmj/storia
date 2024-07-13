# Storia Hugo Theme

Storia is a clean and elegant Hugo theme designed for content creators.

## Features

- Responsive design
- Customizable colors and fonts
- Tailwind CSS for styling
- Customizable header and footer
- Sidebar support
- Image handling for page bundles

## Installation

1. In your Hugo site directory, run:
   ```
   git submodule add https://github.com/yourusername/storia.git themes/storia
   ```
2. Copy the default `config.yaml` from the theme to your site's root directory:
   ```
   cp themes/storia/config.yaml .
   ```
3. Modify the `config.yaml` file to suit your needs. You can customize colors, fonts, and other theme settings in this file.

## Configuration

The `config.yaml` file in the theme's root directory serves as a template. Here's how to use it:

1. Copy the `config.yaml` file from the theme's root directory to your site's root directory.
2. Customize the settings in your copy of `config.yaml`. You can change:
   - Site title, description, and author
   - Color scheme
   - Fonts
   - Social media links
   - Menu items
   - And more!

### Customizing Colors

You can change the theme's colors by modifying the `colors` section in `config.yaml`. For example:

```yaml
params:
  colors:
    primary: "#3490dc"
    secondary: "#ffed4a"
    accent: "#f6993f"
    # ... other color settings
```

### Customizing Fonts

To change the fonts, modify the `fonts` section in `config.yaml`:

```yaml
params:
  fonts:
    sans: "Open Sans"
    serif: "Merriweather"
```

If you want to use custom fonts, uncomment and modify the `customFonts` section:

```yaml
params:
  customFonts:
    - "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Lora:wght@400;700&display=swap"
  fonts:
    sans: "Roboto"
    serif: "Lora"
```

## Development

This theme uses pnpm for managing dependencies. To set up your development environment:

1. Install pnpm if you haven't already:
   ```
   npm install -g pnpm
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. To start the development server:
   ```
   pnpm run dev
   ```

4. To build for production:
   ```
   pnpm run build
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This theme is released under the MIT license. For more information read the [license](https://github.com/yourusername/storia/blob/master/LICENSE).