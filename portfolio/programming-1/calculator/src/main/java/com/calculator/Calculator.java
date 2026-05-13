package com.calculator;

public class Calculator {

    public double add(double a, double b) {
        return a + b;
    }

    public double subtract(double a, double b) {
        return a - b;
    }

    public double multiply(double a, double b) {
        return a * b;
    }

    public double divide(double a, double b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero not allowed");
        }
        return a / b;
    }

    public boolean isEven(int n) {
        return n % 2 == 0;
    }

    public long factorial(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Number must be >= 0");
        }

        long result = 1;
        for (int i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
