package model;

public class GroupClass {
  private String classType;
  private String maxCapacity;
  private String schedule;
  private Trainer trainer;

  public GroupClass(String classType, String schedule, String maxCapacity, Trainer trainer) {
    this.classType = classType;
    this.maxCapacity = maxCapacity;
    this.schedule = schedule;
    this.trainer = trainer;
  }

  public String getClassType() {
    return classType;
  }

  public String getSchedule() {
    return schedule;
  }

  public Trainer getTrainer() {
    return trainer;
  }

  public String getMaxCapacity() {
    return maxCapacity;
  }

  public void setClassType(String classType) {
    this.classType = classType;
  }

  public void setSchedule(String schedule) {
    this.schedule = schedule;
  }

  public void setMaxCapacity(String maxCapacity) {
    this.maxCapacity = maxCapacity;
  }

  public void setTrainer(Trainer trainer) {
    this.trainer = trainer;
  }
}
