from PIL import Image

# Load existing images
img1 = Image.open("opencode-docs.png")
img2 = Image.open("opencode-docs-layout.png")

print(f"opencode-docs.png size: {img1.size}")
print(f"opencode-docs-layout.png size: {img2.size}")

w1, h1 = img1.size
print(f"\nImage 1 dimensions: {w1}x{h1}")

# Crop session sidebar (left portion - typically 25% width)
sidebar_width = int(w1 * 0.25)
sidebar_crop = img1.crop((0, 0, sidebar_width, h1))
sidebar_crop.save("opencode-sessions-sidebar.png")
print(f"Created opencode-sessions-sidebar.png: {sidebar_crop.size}")

# Crop config/settings area (top-right portion)
config_crop = img1.crop((sidebar_width, 0, w1, int(h1 * 0.4)))
config_crop.save("opencode-config-settings.png")
print(f"Created opencode-config-settings.png: {config_crop.size}")

# Crop terminal panel from opencode-docs-layout.png (bottom portion)
w2, h2 = img2.size
print(f"\nImage 2 dimensions: {w2}x{h2}")

# Terminal is typically at the bottom
terminal_height = int(h2 * 0.35)
terminal_crop = img2.crop((0, h2 - terminal_height, w2, h2))
terminal_crop.save("opencode-terminal-panel.png")
print(f"Created opencode-terminal-panel.png: {terminal_crop.size}")

print("\nAll focused images created successfully!")
