import { test, expect } from "@playwright/test";

test("should navigate to the home page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await expect(page).toHaveURL("/login");
  await expect(page).toHaveURL("/profile");

});

test("should navigate to the log in page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/login");
  // Find an element with the text 'About Page' and click on it


  await expect(page.getByRole("code")).toContainText(
      "Username:"
  );
  await expect(page.getByRole("code")).toContainText(
      "Password:"
  );
  await page.getByText("Log in").click();
});