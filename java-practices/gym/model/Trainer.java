package model;

import java.util.List;

public class Trainer {
  private String name;
  private String lastName;
  private String id;
  private List<GroupClass> groupClass;

  public Trainer(String name, String lastName, String id, List<GroupClass> groupClass) {
    this.name = name;
    this.lastName = lastName;
    this.id = id;
    this.groupClass = groupClass;
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

  public List<GroupClass> getGroupClass() {
    return groupClass;
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

  public void setGroupClass(List<GroupClass> groupClass) {
    this.groupClass = groupClass;
  }
}
