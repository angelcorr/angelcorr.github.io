package model;

import java.util.ArrayList;

public class Gym {

  private String name;
  private String address;
  private String phoneNumber;
  private String nit;

  private ArrayList<Partner> listPartners;
  private ArrayList<Trainer> listTrainers;
  private ArrayList<GroupClass> listGroupClasses;
  private ArrayList<Membership> listMemberships;

  public Gym(String name, String address, String phoneNumber, String nit) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.nit = nit;

    this.listPartners = new ArrayList<>();
    this.listTrainers = new ArrayList<>();
    this.listGroupClasses = new ArrayList<>();
    this.listMemberships = new ArrayList<>();
  }

  public void addPartner(Partner partner) {
    listPartners.add(partner);
  }

  public void addTrainer(Trainer trainer) {
    listTrainers.add(trainer);
  }

  public void addGroupClass(GroupClass groupClass) {
    listGroupClasses.add(groupClass);
  }

  public void addMembership(Membership membership) {
    listMemberships.add(membership);
  }

  public Partner searchPartnerByIdentityCard(String identityCard) {
    for (Partner partner : listPartners) {
      if (partner.getIdentityCard().equals(identityCard)) return partner;
    }
    return null;
  }

  public String registerAPartner(String name, String lastName, String identityCard, Membership membership, ArrayList<PaymentHistory> paymentHistory) {
        if (searchPartnerByIdentityCard(identityCard) != null) {
            return "A partner with identity card: " + identityCard + " already exists.";
        }
        Partner partner = new Partner(name, lastName, identityCard, "", membership, paymentHistory);
        listPartners.add(partner);
        return "✅ Partner registered: " + name + " " + lastName + " with identity card: " + identityCard;
    }

  @Override
    public String toString() {
      return "Gym{" +
              "name='" + name + '\'' +
              ", address='" + address + '\'' +
              ", phoneNumber='" + phoneNumber + '\'' +
              ", nit='" + nit + '\'' +
              '}';
    }
}
