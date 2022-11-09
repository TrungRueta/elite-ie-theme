```jsonc
[
  {
    "type": "select",
    "id": "image_ratio",
    "options": [
      {
        "value": "adapt",
        "label": "Adapt"
      },
      {
        "value": "portrait",
        "label": "Portrait"
      },
      {
        "value": "square",
        "label": "Square"
      }
    ],
    "default": "square",
    "label": "Image ratio",
    "info": "Select image ratio"
  }
]
```

```liquid
{% render 'card-collection',
  card_collection: block.settings.collection,
  media_aspect_ratio: section.settings.image_ratio,
  columns: columns
%}


```
