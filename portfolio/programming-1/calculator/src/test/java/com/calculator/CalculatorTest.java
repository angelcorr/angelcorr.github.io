package com.calculator;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


public class CalculatorTest {
  private Calculator c;

    @BeforeEach
    void setUp() {
        c = new Calculator();
    }

    @Test
    void testSumar() {
        assertEquals(8.0, c.add(3,5));
        assertEquals(0.0, c.add(-2,2));
        assertEquals(0.0, c.add(0,0));
    }

    @Test
    void testRestar() {
        assertEquals(6.0, c.subtract(10,4));
        assertEquals(-3.0, c.subtract(5,8));
    }

    @Test
    void testMultiplicar() {
        assertEquals(12.0, c.multiply(3,4));
        assertEquals(-10.0, c.multiply(-2,5));
        assertEquals(0.0, c.multiply(0,99));
    }

    @Test
    void testDividir() {
      assertEquals(5.0, c.divide(10,2));
      assertEquals(3.5, c.divide(7,2));
    }

    @Test
    void testDividirPorCero() {
        // Throwable method result is ignored when writing only assertThrows(ArithmeticException.class, () -> c.divide(5,0));
        Throwable thrown = assertThrows(ArithmeticException.class, () -> c.divide(5,0));
        assertNotNull(thrown);
    }

    @Test
    void testEsPar() {
        assertTrue(c.isEven(4));
        assertFalse(c.isEven(7));
        assertTrue(c.isEven(0));
    }

    @Test
    void testFactorial() {
        assertEquals(1, c.factorial(0));
        assertEquals(120, c.factorial(5));
        assertEquals(1, c.factorial(1));
    }

    @Test
    void testFactorialNegativo() {
        Throwable thrown = assertThrows(IllegalArgumentException.class, () -> c.factorial(-3));
        assertNotNull(thrown);
    }

}
