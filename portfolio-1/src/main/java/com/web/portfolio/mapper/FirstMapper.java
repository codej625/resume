package com.web.portfolio.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.web.portfolio.domain.FirstDo;

@Mapper
public interface FirstMapper {
	
	public FirstDo test() throws Exception;
}
