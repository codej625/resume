package com.web.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.web.portfolio.domain.FirstDo;
import com.web.portfolio.service.FirstService;

@Controller
public class FirstController {

	@Autowired
	FirstService service;

	@RequestMapping(value = "/")
	public String test(Model model) throws Exception {
		System.out.println("FirstController test() => ");
		FirstDo test = service.test();

		model.addAttribute("test", test);

		return "test";
	}
}
