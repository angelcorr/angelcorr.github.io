package model;

public class Partner {
  private String name;
  private String lastName;
  private String id;
  private String identityCard;
  private Membership membership;
  private PaymentHistory paymentHistory;

  public Partner(String name, String lastName, String id, String identityCard, Membership membership, PaymentHistory paymentHistory) {
    this.name = name;
    this.lastName = lastName;
    this.id = id;
    this.identityCard = identityCard;
    this.membership = membership;
    this.paymentHistory = paymentHistory;
  }

  public String getName() {
    return name;
  }

  public String getLastName() {
    return lastName;
  }

  public String getId() {
    return id;
  }

  public String getIdentityCard() {
    return identityCard;
  }

  public Membership getMembership() {
    return membership;
  }

  public PaymentHistory getPaymentHistory() {
    return paymentHistory;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public void setId(String id) {
    this.id = id;
  }

  public void setIdentityCard(String identityCard) {
    this.identityCard = identityCard;
  }

  public void setMembership(Membership membership) {
    this.membership = membership;
  }

  public void setPaymentHistory(PaymentHistory paymentHistory) {
    this.paymentHistory = paymentHistory;
  }
}
