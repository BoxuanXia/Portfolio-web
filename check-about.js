const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  
  console.log('🌐 Navigating to http://localhost:3000/about...');
  try {
    await page.goto('http://localhost:3000/about', { timeout: 15000, waitUntil: 'networkidle' });
    console.log('✅ Page loaded');
  } catch (e) {
    console.error('❌ Failed to load page:', e.message);
    await browser.close();
    return;
  }
  
  console.log('📸 Taking screenshot...');
  await page.screenshot({ path: '/tmp/about-check.png', fullPage: true });
  console.log('✅ Screenshot saved to /tmp/about-check.png');
  
  // Check H1
  const h1 = page.locator('h1').first;
  const h1Visible = await h1.isVisible().catch(() => false);
  console.log(`\n📌 H1 Element:`);
  console.log(`   Visible: ${h1Visible}`);
  if (h1Visible) {
    const text = await h1.textContent();
    console.log(`   Text: "${text}"`);
  }
  
  // Check for opacity: 0 in page
  const content = await page.content();
  const opacityZeroCount = (content.match(/opacity:\s*0/g) || []).length;
  console.log(`\n🎨 Inline Styles Check:`);
  console.log(`   Occurrences of 'opacity: 0': ${opacityZeroCount}`);
  
  // Check paragraphs
  const paraTags = await page.locator('p').count();
  console.log(`\n📝 Content Elements:`);
  console.log(`   Total <p> tags: ${paraTags}`);
  
  // Get visible paragraphs (sample first 5)
  let visibleCount = 0;
  for (let i = 0; i < Math.min(5, paraTags); i++) {
    try {
      const visible = await page.locator('p').nth(i).isVisible();
      if (visible) visibleCount++;
    } catch {}
  }
  console.log(`   Visible paragraphs (first 5): ${visibleCount}/5`);
  
  await browser.close();
  console.log('\n✅ Check complete!');
})().catch(e => {
  console.error('❌ Unhandled error:', e);
  process.exit(1);
});
