from PIL import Image

# Load the main interface image
img = Image.open("opencode-docs.png")
w, h = img.size
print(f"Original image: {w}x{h}")

# The image is a very tall scroll capture. We need to extract viewport-sized sections
# that show specific UI elements clearly.

# 1. Session sidebar - typically appears on the left, let's get a focused section
#    showing the session list area (usually in the upper-left portion)
sidebar_crop = img.crop((0, 100, 350, 700))
sidebar_crop.save("opencode-sessions-sidebar.png")
print(f"Sessions sidebar: {sidebar_crop.size}")

# 2. Config settings - this would be in a settings/preferences area
#    Let's look for configuration UI elements (typically in main content area)
config_crop = img.crop((400, 200, 1400, 800))
config_crop.save("opencode-config-settings.png")
print(f"Config settings: {config_crop.size}")

# 3. Terminal panel - typically at the bottom of the interface
terminal_crop = img.crop((0, h - 500, w, h - 50))
terminal_crop.save("opencode-terminal-panel.png")
print(f"Terminal panel: {terminal_crop.size}")

print("\nFocused images created successfully!")
