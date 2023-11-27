package com.example.book.entity;

public class ChatMessage {

    public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public boolean isUser() {
		return isUser;
	}
	public void setUser(boolean isUser) {
		this.isUser = isUser;
	}
	public String getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}
	private String text;
    private boolean isUser;
    private String timestamp;
	public ChatMessage(String text, boolean isUser, String timestamp) {
		super();
		this.text = text;
		this.isUser = isUser;
		this.timestamp = timestamp;
	}
	@Override
	public String toString() {
		return "ChatMessage [text=" + text + ", isUser=" + isUser + ", timestamp=" + timestamp + "]";
	}

}