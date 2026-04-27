"""Audit all navigation buttons and breadcrumbs across workshop pages."""
import json
from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:8000"

# Full sidebar order (the source of truth)
SIDEBAR_ORDER = [
    "home.html",
    # Training Session
    "training-reference.html",
    "ai-coding-agents.html",
    "vibe-coding-reference.html",
    "llm-eval-intro.html",
    "spec-driven-reference.html",
    "free-practice-feature.html",
    "skills.html",
    "skills-reference.html",
    "getting-started.html",
    "desktop-client.html",
    "setup-account.html",
    # Agents Toolkits
    "trae-solo-overview.html",
    "multitasking.html",
    "tool-panel.html",
    "mcp-integration.html",
    "deploy-backend.html",
    "deployment-troubleshooting.html",
    "opencode.html",
    "opencode-web-ui.html",
    # Survival Kit
    "microsoft-copilot-studio.html",
    "copilot-studio-reference.html",
    "agent-integration.html",
    "genai-portal.html",
    "genai-portal-reference.html",
    "ollama.html",
    # Wrap Up
    "wrapping-up.html",
]


def audit_page(page_url, filename):
    """Audit a single page's navigation buttons and breadcrumbs."""
    results = {"page": filename, "issues": [], "prev": None, "next": None, "breadcrumb": None}
    
    try:
        page.goto(page_url, wait_until="domcontentloaded", timeout=10000)
        page.wait_for_timeout(1000)
        
        # Check for navigation buttons
        nav_buttons = page.locator(".navigation-buttons")
        if nav_buttons.count() > 0:
            prev_btn = nav_buttons.locator("a.btn-secondary")
            next_btn = nav_buttons.locator("a.btn-primary")
            
            if prev_btn.count() > 0:
                prev_href = prev_btn.get_attribute("href")
                prev_text = prev_btn.inner_text()
                results["prev"] = {"href": prev_href, "text": prev_text}
            if next_btn.count() > 0:
                next_href = next_btn.get_attribute("href")
                next_text = next_btn.inner_text()
                results["next"] = {"href": next_href, "text": next_text}
        
        # Check breadcrumbs
        breadcrumb_list = page.locator(".breadcrumb-list")
        if breadcrumb_list.count() > 0:
            items = breadcrumb_list.locator(".breadcrumb-item")
        count = items.count()
        breadcrumb_text = []
        for i in range(count):
            item = items.nth(i)
            links = item.locator("a")
            if links.count() > 0:
                for j in range(links.count()):
                    link = links.nth(j)
                    breadcrumb_text.append({"text": link.inner_text(), "href": link.get_attribute("href")})
            else:
                breadcrumb_text.append({"text": item.inner_text(), "href": None})
        results["breadcrumb"] = breadcrumb_text
        
        # Check mobile menu button visibility
        mobile_btn = page.locator(".mobile-menu-btn")
        if mobile_btn.count() > 0:
            is_visible = mobile_btn.is_visible()
            if is_visible:
                results["issues"].append("Mobile menu button is VISIBLE on desktop")
        
        # Screenshot for visual inspection
        page.screenshot(path=f"/tmp/audit-{filename.replace('.html', '')}.png", full_page=True)
                
    except Exception as e:
        results["issues"].append(f"Error: {str(e)}")
    
    return results


def get_expected_neighbors(filename):
    """Get expected prev/next pages based on sidebar order."""
    try:
        idx = SIDEBAR_ORDER.index(filename)
        prev = SIDEBAR_ORDER[idx - 1] if idx > 0 else None
        next_page = SIDEBAR_ORDER[idx + 1] if idx < len(SIDEBAR_ORDER) - 1 else None
        return prev, next_page
    except ValueError:
        return None, None


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        results = []
        for filename in SIDEBAR_ORDER:
            if filename == "home.html" or filename == "index.html":
                continue
            page_url = f"{BASE_URL}/{filename}"
            result = audit_page(page_url, filename)
            expected_prev, expected_next = get_expected_neighbors(filename)
            result["expected_prev"] = expected_prev
            result["expected_next"] = expected_next
            
            # Check if prev/next match expected
            if result["prev"] and expected_prev:
                if expected_prev not in (result["prev"].get("href", "")):
                    result["issues"].append(
                        f"PREV mismatch: got '{result['prev']['href']}' expected '{expected_prev}'"
                    )
            if result["next"] and expected_next:
                if expected_next not in (result["next"].get("href", "")):
                    result["issues"].append(
                        f"NEXT mismatch: got '{result['next']['href']}' expected '{expected_next}'"
                    )
            
            if result["issues"]:
                print(f"\n❌ {filename}:")
                for issue in result["issues"]:
                    print(f"   - {issue}")
            else:
                print(f"✅ {filename}: OK")
            
            results.append(result)
        
        # Save detailed results
        with open("/tmp/audit_results.json", "w") as f:
            json.dump(results, f, indent=2)
        
        browser.close()
        print(f"\nAudit complete. Results saved to /tmp/audit_results.json")


if __name__ == "__main__":
    main()
