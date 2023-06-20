import { glob, fs } from 'zx';
import puppeteer from 'puppeteer-core';

const folder = 'build/assets/graph';

const [images, browser] = await Promise.all([
	glob(`${folder}/*.svg`),
	puppeteer.launch({
		channel: 'chrome'
	})
]);

await Promise.all(
	images.map(async (image) => {
		const [svg, page] = await Promise.all([
			fs.readFile(image, 'utf-8'), //
			browser.newPage()
		]);
		await Promise.all([
			page.setContent(svg), //
			page.setViewport({ width: 1200, height: 627 })
		]);
		const pngBuffer = await page.screenshot({ type: 'png' });
		await fs.writeFile(`${image.replace('.svg', '')}.png`, pngBuffer);
		await page.close();
	})
);

await browser.close();
