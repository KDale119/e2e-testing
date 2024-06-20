import { test, expect } from "@playwright/test";

test("should navigate to the home page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/home");
  // Find an element with the text 'About Page' and click on it
  await page.getByText("Login").click();
  await page.getByText("Profile").click();
  // The new url should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("/login");
  await expect(page.getByRole("form")).toContainText(
      "Username",
  );
  await expect(page.getByRole("form")).toContainText(
      "Password",
  );
  await expect(page.getByRole("button")).toContainText(
      "Log in",
  );
  await expect(page).toHaveURL("/profile");
  // The new page should contain an h1 with "About Page"
  await expect(page.getByRole("heading", { level: 4 })).toContainText(
      "Profile",
  );
  await expect(page.getByRole("button")).toContainText(
      "Update info",
  );
});

// test("should navigate to the log in page", async ({ page }) => {
//   // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
//   await page.goto("/login");
//   // Find an element with the text 'About Page' and click on it
//   await page.getByText("Login").click();
//
//   await page.getByText("Profile").click();
//
//
//   // The new url should be "/about" (baseURL is used there)
//   await expect(page).toHaveURL("/login");
//   await expect(page.getByRole("form")).toContainText(
//       "Username:"
//   );
//   await expect(page.getByRole("form")).toContainText(
//       "Password:"
//   );
//
//   await expect(page).toHaveURL("/profile");
//
//   // The new page should contain an h1 with "About Page"
//   await expect(page.getByRole("heading", { level: 1 })).toContainText(
//       "About Page",
//   );
// });