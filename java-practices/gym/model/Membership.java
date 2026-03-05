package model;

import java.time.LocalDate;

public class Membership {
  private String type; // Premium, Standard, Basic
  private LocalDate startDate;
  private LocalDate endDate;
  private double price;

  public Membership(String type, LocalDate startDate, LocalDate endDate, double price) {
    this.type = type;
    this.startDate = startDate;
    this.endDate = endDate;
    this.price = price;
  }

  public String getType() {
    return type;
  }

  public LocalDate getStartDate() {
    return startDate;
  }

  public LocalDate getEndDate() {
    return endDate;
  }

  public double getPrice() {
    return price;
  }

  public void setType(String type) {
    this.type = type;
  }

  public void setStartDate(LocalDate startDate) {
    this.startDate = startDate;
  }

  public void setEndDate(LocalDate endDate) {
    this.endDate = endDate;
  }

  public void setPrice(double price) {
    this.price = price;
  }
}
