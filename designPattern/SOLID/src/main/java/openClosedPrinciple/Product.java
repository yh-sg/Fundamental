package openClosedPrinciple;

import openClosedPrinciple.Constants.Color;
import openClosedPrinciple.Constants.Size;

public class Product {
	  private String name;
	  private Color color;
	  private Size size;
	
	  public Product(String name, Color color, Size size) {
	    this.name = name;
	    this.color = color;
	    this.size = size;
	  }

	public String getName() {
		return name;
	}
	  
	public Color getColor() {
		return color;
	}
	
	public Size getSize() {
		return size;
	}
}
