# text heading size

```jsonc
[
  {
    "type": "select",
    "id": "heading_size",
    "options": [
      {
        "value": "h4",
        "label": "Heading h4"
      },
      {
        "value": "h3",
        "label": "Heading h3"
      },
      {
        "value": "h2",
        "label": "Heading h2"
      },
      {
        "value": "h1",
        "label": "Heading h1"
      },
      {
        "value": "h0",
        "label": "Heading h0"
      }
    ],
    "default": "h1",
    "label": "heading_size"
  }
]
```

```html
<h2 id="SectionHeading-{{ section.id }}" class="{{ section.settings.heading_size }}">
  Heading here
</h2>
```

## style heading

```jsonc
{
  "type": "select",
  "id": "heading_style",
  "label": "Heading Style",
  "options": [
    {
      "value": "default",
      "label": "Default"
    },
    {
      "value": "2",
      "label": "Style 2"
    }
  ],
  "default": "default"
}
```

```html
<h2 class="heading-style--{{ section.settings.heading_style }}">title here</h2>
```
