package model;

import java.time.LocalDate;

public class PaymentHistory {
  private LocalDate date;
  private double value;
  private String method;
  

  public PaymentHistory(LocalDate date, double value, String method) {
    this.date = date;
    this.value = value;
    this.method = method;
  }

  public LocalDate getDate() {
    return date;
  }

  public double getValue() {
    return value;
  }

  public String getMethod() {
    return method;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public void setValue(double value) {
    this.value = value;
  }

  public void setMethod(String method) {
    this.method = method;
  }
}
