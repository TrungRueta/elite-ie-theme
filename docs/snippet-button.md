```jsonc
[
  {
    "type": "text",
    "id": "button_label",
    "default": "Button label",
    "label": "Button label"
  },
  {
    "type": "url",
    "id": "link",
    "label": "Link"
  },
  {
    "type": "select",
    "id": "type",
    "label": "Button type",
    "options": [
      {
        "value": "primary",
        "label": "Primary"
      },
      {
        "value": "secondary",
        "label": "Secondary"
      },
      {
        "value": "tertiary",
        "label": "Tertiary"
      },
      {
        "value": "link",
        "label": "Link"
      }
    ],
    "default": "primary"
  }
]
```

```liquid
  <a
    {% if block.settings.link %}
      href="{{ block.settings.link }}"
    {% else %}
      role="link"
      aria-disabled="true"
    {% endif %}
    class="
      {% if block.settings.type == 'link' %}link underlined-link
      {% else %}button button--{{ block.settings.type }}
      {% endif %}
    ">
    {{ block.settings.label | escape }}
  </a>
```
