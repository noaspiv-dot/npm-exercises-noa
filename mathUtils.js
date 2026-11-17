// פונקציית עזר בסיסית
export function multiply(a, b) {
    return a * b;
}

// פונקציה ראשית שקוראת לפונקציית ה-multiply
export function calculateTotalPrice(price, quantity) {
    if (price < 0 || quantity < 0) {
        throw new Error('מחיר או כמות לא יכולים להיות שליליים');
    }
    return multiply(price, quantity);
}