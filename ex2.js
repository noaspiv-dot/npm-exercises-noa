import colors from 'colors';
import fs from 'fs';

// סעיף 5: הגדרת Theme חדש (ירוק עם קו תחתון)
colors.setTheme({
    greenUnderline: ['green', 'underline']
});

// סעיף 3: קריאת שמות המוצרים מהקובץ
const data = fs.readFileSync('products.txt', 'utf-8');
const products = data.split('\n').map(p => p.trim()).filter(Boolean);

// סעיף 4: הדפסת כל מוצר בצבע שונה לקונסול
const colorOptions = ['red', 'blue', 'yellow', 'magenta', 'cyan'];

console.log('--- הצגת מוצרים בצבעים שונים ---');
products.forEach((product, index) => {
    const chosenColor = colorOptions[index % colorOptions.length];
    console.log(product[chosenColor]);
});

// שימוש ב-Theme שהוגדר עבור הצגת המוצרים בצורה אחידה
console.log('\n--- הצגת מוצרים באמצעות Theme (ירוק וקו תחתון) ---');
products.forEach(product => {
    console.log(product.greenUnderline);
});