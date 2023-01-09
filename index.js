//https://www.youtube.com/watch?v=S67gyqnYHmI
const puppeteer = require('puppeteer');

async function run(){
    const browser =  await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://traversymedia.com');
    // await page.goto('https://pec.ac.in');
    // await page.screenshot({path:'example0.png', fullPage: true});
    // await page.pdf({path:'example1.pdf', format: 'A5'});
    // const html = await page.content();
    // console.log(html);
    // const title = await page.evaluate(()=> document.title);
    // console.log(title);

    // const text = await page.evaluate(()=> document.body.innerText);
    // console.log(text);

    const text = await page.evaluate(()=> 
    Array.from(document.querySelectorAll('a'), (e)=>e.href)
    );
    console.log(text); 
    await browser.close();

}

run();