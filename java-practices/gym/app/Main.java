package app;

import model.*;
import java.time.LocalDate;
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    Gym gym = new Gym("FitLife Gym", "123 Main St", "555-1234", "123456789");
    System.out.println(gym);

    Membership membership = new Membership("Premium", LocalDate.of(2024, 1, 1), LocalDate.of(2024, 1, 31), 50.0);
    ArrayList<PaymentHistory> paymentHistory = new ArrayList<>();
    paymentHistory.add(new PaymentHistory(LocalDate.of(2024, 1, 1), 50.0, "Credit Card"));
    
    System.out.println(gym.registerAPartner("Juan Pérez", "123", "3101111111", membership, paymentHistory));
  }
}