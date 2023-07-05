---
# An instance of the Pages widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: pages

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 20

title: Selected Publications 
subtitle: |
  Here is a peek into my research. For the most recent publications, please visit my [Google Scholar](https://scholar.google.com/) page.  
  For a complete list of publications, [click here](./publication/).

content:
  # Filter on criteria
  filters:
    folders:
      - publication
    tag: ''
    category: ''
    publication_type: ''
    author: ''
    exclude_featured: true
    exclude_future: false
    exclude_past: false
  # Choose how many pages you would like to display (0 = all pages)
  count: 0
  # Choose how many pages you would like to offset by
  offset: 0
  # Page order: descending (desc) or ascending (asc) date.
  order: desc
design:
  # Choose a view for the listings:
  view: citation
  columns: '1'
---

<!-- 
{{% callout note %}}
For complete list of publications, [click here](./publication/).
{{% /callout %}}
-->
