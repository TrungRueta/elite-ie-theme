```jsonc
[
  {
    "type": "select",
    "id": "slider_type",
    "label": "Slider type",
    "options": [
      {
        "value": "loop",
        "label": "Loop"
      },
      {
        "value": "fade",
        "label": "Fade"
      },
      {
        "value": "slide",
        "label": "Slide"
      }
    ],
    "default": "slide"
  },
  {
    "type": "checkbox",
    "id": "auto_rotate",
    "label": "Autoplay",
    "default": false
  },
  {
    "type": "range",
    "id": "change_slides_speed",
    "min": 3,
    "max": 9,
    "step": 2,
    "unit": "s",
    "label": "Interval (autoplay)",
    "default": 5
  }
]
```

```liquid
<slideshow-component-2
  {% if section.settings.auto_rotate %}
    data-autoplay='true'
  {% endif %}
  {% if section.settings.change_slides_speed %}
    data-interval='{{ section.settings.change_slides_speed }}'
  {% endif %}
  data-type='{{ section.settings.slider_type }}'
```

