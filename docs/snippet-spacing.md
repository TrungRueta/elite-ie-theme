# vertical spacing

```jsonc
[
  {
    "type": "range",
    "id": "padding_top",
    "min": 0,
    "max": 100,
    "step": 4,
    "unit": "px",
    "label": "t:sections.all.padding.padding_top",
    "default": 36
  },
  {
    "type": "range",
    "id": "padding_bottom",
    "min": 0,
    "max": 100,
    "step": 4,
    "unit": "px",
    "label": "t:sections.all.padding.padding_bottom",
    "default": 36
  },
  {
    "type": "select",
    "id": "page_width_max",
    "label": "Set max width",
    "options": [
      {
        "value": "",
        "label": "No limit"
      },
      {
        "value": "md",
        "label": "Medium"
      }
    ],
    "default": ""
  }
]
```

```liquid
{%- style -%}
  .section-{{ section.id }}-padding {
    padding-top: {{ section.settings.padding_top | times: 0.75 | round: 0 }}px;
    padding-bottom: {{ section.settings.padding_bottom | times: 0.75 | round: 0 }}px;
  }

  @media screen and (min-width: 750px) {
    .section-{{ section.id }}-padding {
      padding-top: {{ section.settings.padding_top }}px;
      padding-bottom: {{ section.settings.padding_bottom }}px;
    }
  }
{%- endstyle -%}

class="section-{{ section.id }}-padding"
```

# full width

```jsonc
[
  {
    "type": "checkbox",
    "id": "full_width",
    "label": "Full width",
    "default": false
  }
]
```

```liquid
class="
  {% unless section.settings.full_width %}page-width{% endunless %}
"
```

# page spacing

```jsonc
[
  {
    "type": "checkbox",
    "id": "no_page_padding",
    "label": "No padding horizontal",
    "default": true
  }
]
```

```liquid
{% if section.settings.no_page_padding %}tw-px-0{% endif %}
```
