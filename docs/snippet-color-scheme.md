```jsonc
[
  {
    "type": "select",
    "id": "color_scheme",
    "options": [
      {
        "value": "accent-1",
        "label": "Accent-1"
      },
      {
        "value": "accent-2",
        "label": "Accent-2"
      },
      {
        "value": "background-1",
        "label": "Background-1"
      },
      {
        "value": "background-2",
        "label": "Background-2"
      },
      {
        "value": "inverse",
        "label": "Inverse"
      }
    ],
    "default": "background-1",
    "label": "Color scheme",
    "info": "Choose color scheme"
  }
]
```

```liquid
<div class='color-{{ section.settings.color_scheme }} gradient'>...
```
