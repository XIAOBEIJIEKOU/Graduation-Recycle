package com.example.rubbish.dao;

import com.example.rubbish.model.Article;
import com.example.rubbish.model.Order;
import com.example.rubbish.model.Recycler;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface RecycleDao {

    List<Article> getAllArticle();

    String getKindByName(String name);

    List<Recycler> getAllRecyclers();

    int insertOrder(Order order);

    int updateOrder(Order order);

    List<Order> getOrderListByName(String name);

    Order getOrderListById(int id);

    int deleteOrder(int id);

}
