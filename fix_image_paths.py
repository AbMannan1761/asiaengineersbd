import os

files_to_fix = [
    "src/data/projects.js",
    "src/components/Hero.jsx",
    "src/components/StatsCounter.jsx",
    "src/components/Footer.jsx",
    "index.html"
]

for file_path in files_to_fix:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Replace "/images/ with "./images/
        new_content = content.replace('"/images/', '"./images/')
        
        if new_content != content:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Fixed: {file_path}")
        else:
            print(f"No changes needed: {file_path}")

print("All image paths updated to relative ./images/")
