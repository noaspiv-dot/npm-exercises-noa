import leftPad from 'left-pad';
import { titleCase } from 'title-case';
import fs from 'fs/promises';

async function runExercise1() {
    let fileContent = '';
    const baseText = 'hello world';

    for (let i = 1; i <= 15; i++) {
        let currentText = baseText;

        // סעיף 4: בכל איטרציה אי-זוגית נפעיל את title-case
        if (i % 2 !== 0) {
            currentText = titleCase(baseText);
        }

        // סעיף 1: הוספת רווחים משתנים באמצעות left-pad
        const paddedString = leftPad(currentText, currentText.length + i, ' ');
        
        console.log(paddedString);
        fileContent += paddedString + '\n';
    }

    // סעיף 2: כתיבה לקובץ טקסט חדש בתיקיית הפרויקט
    await fs.writeFile('output.txt', fileContent, 'utf-8');
    console.log('\nהתוצאות נשמרו בהצלחה בקובץ output.txt!');
}

runExercise1();