import { expect, test } from '@playwright/test'

test('标签插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#slot-label')

  const wrap = page.locator('#slot-label')

  // 多选模式：验证标签插槽渲染（图片 + 超长文本）
  const multi = wrap.locator('.tiny-base-select__multiple')
  await expect(multi.locator('.tiny-tag').first().locator('.label-user-head')).toBeVisible()
  await expect(multi.locator('.tiny-tag').first().locator('.label-desc')).toContainText(
    '北京超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长'
  )
  await expect(multi.locator('.tiny-tag')).toHaveCount(2)

  // 单选模式：验证标签插槽渲染（图标 + 文本）
  const single = wrap.locator('.tiny-base-select').nth(1)
  await expect(single.locator('.tiny-base-select__single-label svg')).toBeVisible()
  await expect(single.locator('.tiny-base-select__single-label')).toContainText('天津')

  // 展开单选下拉
  await single.click()
  const singleDropdown = page.locator('.tiny-select-dropdown:not(.is-multiple)').filter({
    has: page.locator('[aria-selected="true"][aria-label="天津"]')
  })
  await expect(singleDropdown).toBeVisible()
  await expect(singleDropdown.locator('[aria-label="北京"] .tiny-option__icon')).toBeVisible()

  // 切换选项，验证单选标签插槽更新
  await singleDropdown.locator('[aria-label="北京"]').click()
  await expect(single.locator('.tiny-base-select__single-label')).toContainText('北京')
  await expect(single.locator('.tiny-base-select__single-label svg')).toBeVisible()
})
