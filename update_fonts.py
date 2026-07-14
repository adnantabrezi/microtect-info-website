import re

with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Remove the import
css = re.sub(r"@import url\('.*?'\);\n", '', css)

# Replace Inter in body with Arial
css = css.replace("font-family: 'Inter', sans-serif;", "font-family: Arial, Helvetica, sans-serif;")

# Remove other font families
css = re.sub(r"\s*font-family: 'Montserrat', sans-serif;", '', css)
css = re.sub(r"\s*font-family: 'IBM Plex Mono', monospace;", '', css)

# Fix the table header color to match the image crop (blue instead of black)
css = re.sub(r'(\.ps-table thead th\s*\{[\s\S]*?)color:\s*var\(--text\);', r'\1color: #0056b3;', css)

with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(css)
