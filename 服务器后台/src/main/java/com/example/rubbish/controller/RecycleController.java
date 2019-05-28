package com.example.rubbish.controller;

import com.example.rubbish.dao.RecycleDao;
import com.example.rubbish.model.Article;
import com.example.rubbish.model.Order;
import com.example.rubbish.model.Recycler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class RecycleController {

    @Autowired
    private RecycleDao recycleDao;

    @RequestMapping(value = "/getAllArticles", method = {RequestMethod.GET}, consumes = {"applciation/json"})
    @ResponseBody
    private Object getAllArticles(){
        List<Article> articleList = recycleDao.getAllArticle();
        return articleList;
    }

    @RequestMapping(value = "/getKindByName", method = {RequestMethod.GET}, consumes = {"applciation/json"})
    @ResponseBody
    private Object getKindByName(@RequestParam(name = "name") String name){
        String kind = recycleDao.getKindByName(name);
        return kind;
    }

    @RequestMapping(value = "/getAllRecyclers", method = {RequestMethod.GET}, consumes = {"applciation/json"})
    @ResponseBody
    private Object getAllRecyclers(){
        List<Recycler> recyclerList = recycleDao.getAllRecyclers();
        return recyclerList;
    }

    /**
     * 前端GET提交，按照json字段匹配bean类，不需要加@RequestBody
     * @param order
     * @return
     */
    @RequestMapping(value = "/handleorder", method = {RequestMethod.GET}, consumes = {"applciation/json"})
    @ResponseBody
    private Object handleorder(Order order){
        int count;
        if(order.getId() == 0){
             count = recycleDao.insertOrder(order);
        } else {
             count = recycleDao.updateOrder(order);
        }
        return count;
    }

    @RequestMapping(value = "/getOrderListByName", method = {RequestMethod.GET}, consumes = {"applciation/json"})
    @ResponseBody
    private Object getOrderListByName(@RequestParam(name = "name") String name){
        List<Order> orderList = recycleDao.getOrderListByName(name);
        return orderList;
    }

    @RequestMapping(value = "/getOrderListById", method = {RequestMethod.GET}, consumes = {"applciation/json"})
    @ResponseBody
    private Object getOrderListById(@RequestParam(name = "orderId") String orderId){
        int id = Integer.valueOf(orderId);
        Order order = recycleDao.getOrderListById(id);
        return order;
    }

    @RequestMapping(value = "/deleteOrder", method = {RequestMethod.GET}, consumes = {"applciation/json"})
    @ResponseBody
    private Object deleteOrder(@RequestParam(name = "id") String orderId){
        int id = Integer.valueOf(orderId);
        int count = recycleDao.deleteOrder(id);
        return count;
    }


}
