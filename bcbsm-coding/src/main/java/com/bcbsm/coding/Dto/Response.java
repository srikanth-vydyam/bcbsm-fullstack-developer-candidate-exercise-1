package com.bcbsm.coding.Dto;

import java.util.ArrayList;

public class Response {
	
	private Integer status = 200;
	
	private boolean success = false;
	
	private String message = "Something went wrong!";
	
	private Object data = new ArrayList<>();

	public boolean isSuccess() {
		return success;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "Response [status=" + status + ", success=" + success + ", message=" + message + ", data=" + data + "]";
	}
	
	public String toJson() {
		return "{\"status\":" + status + ", \"success\":" + success + ", \"message\":\"" + message + "\", \"data\":" + data + "}";
	}
}

