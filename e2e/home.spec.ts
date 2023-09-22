import { test, expect } from '@playwright/test'

test('should navigate to the home page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')

  // Find an element with the text 'English' and click on it
  await page.getByText('English').click()

  // The new url should be "/en" (baseURL is used there)
  await expect(page).toHaveURL('/en')
  
  // The new page should contain an h1 with "Benefit News Updates"
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Benefit News Updates'
  )
})