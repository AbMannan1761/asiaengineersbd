import subprocess
import os
import shutil

cwd = os.getcwd()
dist_dir = os.path.join(cwd, "dist")

print(f"Deploying {dist_dir} to gh-pages...")

# Clean any existing .git inside dist
dotgit = os.path.join(dist_dir, ".git")
if os.path.exists(dotgit):
    shutil.rmtree(dotgit, ignore_errors=True)

# Also create a .nojekyll file so GitHub Pages doesn't ignore _ or assets
with open(os.path.join(dist_dir, ".nojekyll"), "w") as f:
    f.write("")

commands = [
    ["git", "init"],
    ["git", "checkout", "-b", "gh-pages"],
    ["git", "add", "."],
    ["git", "commit", "-m", "Deploy compiled production build to GitHub Pages"],
    ["git", "remote", "add", "origin", "https://github.com/AbMannan1761/asiaengineersbd.git"],
    ["git", "push", "-f", "origin", "gh-pages"]
]

for cmd in commands:
    print(f"Running: {' '.join(cmd)}")
    res = subprocess.run(cmd, cwd=dist_dir, capture_output=True, text=True)
    if res.stdout:
        print(res.stdout.strip())
    if res.stderr:
        print(res.stderr.strip())

print("Deployment to gh-pages completed!")
