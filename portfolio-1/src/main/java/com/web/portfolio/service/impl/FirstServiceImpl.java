package com.web.portfolio.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.portfolio.domain.FirstDo;
import com.web.portfolio.mapper.FirstMapper;
import com.web.portfolio.service.FirstService;

@Service
public class FirstServiceImpl implements FirstService {

	@Autowired
	FirstMapper mapper;

	@Override
	public FirstDo test() throws Exception {
		// TODO Auto-generated method stub
		return mapper.test();
	}

}
