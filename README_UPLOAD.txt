Simple Mapmaking Tools landing page
===================================

Upload the contents of this folder to the BlueHost directory where you want the splash page to live.

Expected upload structure:

simple-mapmaking-tools/
  index.html
  assets/
    css/
      styles.css
    js/
      site.js
    thumbnails/
      rangefan.jpg
      greatcircles.jpg
      outlinemap.jpg
      multirings.jpg
      rangefan-placeholder.svg
      greatcircles-placeholder.svg
      outlinemap-placeholder.svg
      multirings-placeholder.svg
  rangefan/
    index.html
    ...
  greatcircles/
    index.html
    ...
  OutlineMap/
    index.html
    ...
  Multirings/
    index.html
    ...

Thumbnail files to add:

- assets/thumbnails/rangefan.jpg
- assets/thumbnails/greatcircles.jpg
- assets/thumbnails/outlinemap.jpg
- assets/thumbnails/multirings.jpg

Recommended thumbnail size:

- 1200 x 900 pixels
- JPG, about 250-500 KB each
- Screenshots should show the actual map output, not just the control panel

Tool links used by index.html:

- rangefan/
- greatcircles/
- OutlineMap/
- Multirings/

In the GitHub Pages version, these folders are included directly in this repo so the landing page links resolve under tools.thinkinginspace.net.

BlueHost notes:

- Folder names are case-sensitive on most hosting servers. Keep OutlineMap and Multirings capitalized if using this file unchanged.
- If your tool folders use different names, update the href values in index.html.
- The placeholder SVGs remain as fallbacks if a JPG thumbnail is missing.
