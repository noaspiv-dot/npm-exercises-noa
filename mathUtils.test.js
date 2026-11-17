import { describe, it, expect } from 'vitest';
import { calculateTotalPrice } from './mathUtils.js';

describe('Calculate Total Price Tests', () => {
    
    it('should calculate total price correctly for positive numbers', () => {
        const result = calculateTotalPrice(50, 3);
        expect(result).toBe(150);
    });

    it('should handle zero quantity correctly', () => {
        const result = calculateTotalPrice(100, 0);
        expect(result).toBe(0);
    });

    it('should throw an error when negative values are passed', () => {
        expect(() => calculateTotalPrice(-10, 2)).toThrowError('מחיר או כמות לא יכולים להיות שליליים');
    });

});