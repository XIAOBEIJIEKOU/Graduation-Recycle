package com.example.rubbish.model;

public class Order {

    private int id;

    private String name;

    private String phone;

    private String address;

    private String time;

    private String recyclerName;

    private String recyclerPhone;

    private String recyclerPhoto;

    private int count;

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getRecyclerPhoto() {
        return recyclerPhoto;
    }

    public void setRecyclerPhoto(String recyclerPhoto) {
        this.recyclerPhoto = recyclerPhoto;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRecyclerPhone() {
        return recyclerPhone;
    }

    public void setRecyclerPhone(String recyclerPhone) {
        this.recyclerPhone = recyclerPhone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getRecyclerName() {
        return recyclerName;
    }

    public void setRecyclerName(String recyclerName) {
        this.recyclerName = recyclerName;
    }
}
