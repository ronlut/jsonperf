
package com.jsonperf.test;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

public class User {
    private String id;
    private int index;
    private UUID guid;
    private boolean isActive;
    private String balance;
    private String picture;
    private int age;
    private EyeColor eyeColor;
    private Name name;
    private String company;
    private String mainEmail;
    private String phone;
    private String address;
    private String about;
    private String registered;
    private String latitude;
    private String longitude;
    private List<String> tags;
    private List<Integer> range;
    private List<Friend> friends;

    public String[] getEmails() {
        return emails;
    }

    public void setEmails(String[] emails) {
        this.emails = emails;
    }

    private String[] emails;
    private String greeting;
    private String favoriteFruit;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public UUID getGuid() {
        return guid;
    }

    public void setGuid(UUID guid) {
        this.guid = guid;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public EyeColor getEyeColor() {
        return eyeColor;
    }

    public void setEyeColor(EyeColor eyeColor) {
        this.eyeColor = eyeColor;
    }

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getMainEmail() {
        return mainEmail;
    }

    public void setMainEmail(String email) {
        this.mainEmail = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getRegistered() {
        return registered;
    }

    public void setRegistered(String registered) {
        this.registered = registered;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public List<Integer> getRange() {
        return range;
    }

    public void setRange(List<Integer> range) {
        this.range = range;
    }

    public List<Friend> getFriends() {
        return friends;
    }

    public void setFriends(List<Friend> friends) {
        this.friends = friends;
    }

    public String getGreeting() {
        return greeting;
    }

    public void setGreeting(String greeting) {
        this.greeting = greeting;
    }

    public String getFavoriteFruit() {
        return favoriteFruit;
    }

    public void setFavoriteFruit(String favoriteFruit) {
        this.favoriteFruit = favoriteFruit;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return index == user.index &&
                isActive == user.isActive &&
                age == user.age &&
                Objects.equals(id, user.id) &&
                Objects.equals(guid, user.guid) &&
                Objects.equals(balance, user.balance) &&
                Objects.equals(picture, user.picture) &&
                eyeColor == user.eyeColor &&
                Objects.equals(name, user.name) &&
                Objects.equals(company, user.company) &&
                Objects.equals(mainEmail, user.mainEmail) &&
                Objects.equals(phone, user.phone) &&
                Objects.equals(address, user.address) &&
                Objects.equals(about, user.about) &&
                Objects.equals(registered, user.registered) &&
                Objects.equals(latitude, user.latitude) &&
                Objects.equals(longitude, user.longitude) &&
                Objects.equals(tags, user.tags) &&
                Objects.equals(range, user.range) &&
                Objects.equals(friends, user.friends) &&
                Arrays.equals(emails, user.emails) &&
                Objects.equals(greeting, user.greeting) &&
                Objects.equals(favoriteFruit, user.favoriteFruit);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(id, index, guid, isActive, balance, picture, age, eyeColor, name, company, mainEmail, phone, address, about, registered, latitude, longitude, tags, range, friends, greeting, favoriteFruit);
        result = 31 * result + Arrays.hashCode(emails);
        return result;
    }
}
