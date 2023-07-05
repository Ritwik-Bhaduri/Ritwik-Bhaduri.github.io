---
# An instance of the Pages widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: pages

# This file represents a page section.
headless: true  # Set to true to hide the page from site's navigation and make it inaccessible
active: false 

# Order that this section appears on the page.
weight: 30  # Determines the order in which sections appear on the page

title: Recent Posts  # The title of the section
subtitle:  # Optional subtitle for the section

content:
  # Filter on criteria
  filters:
    folders:
      - post                    # The folder(s) to filter posts from
    tag: ''                     # Filter by tag (leave empty for all tags)
    category: ''                # Filter by category (leave empty for all categories)
    publication_type: ''        # Filter by publication type (leave empty for all types)
    author: ''                  # Filter by author (leave empty for all authors)
    exclude_featured: false     # Exclude featured posts
    exclude_future: false       # Exclude future posts
    exclude_past: false         # Exclude past posts
  # Choose how many pages you would like to display (0 = all pages)
  count: 5  # Number of posts to display
  # Choose how many pages you would like to offset by
  offset: 0  # Number of posts to skip
  # Page order: descending (desc) or ascending (asc) date.
  order: desc  # Sort order of the posts

design:
  # Choose a view for the listings:
  view: compact  # Options: compact, showcase, journal, cards, hero
  columns: '2'  # Number of columns for the post listings
---
