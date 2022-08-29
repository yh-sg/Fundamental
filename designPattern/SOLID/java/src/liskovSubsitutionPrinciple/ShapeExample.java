package liskovSubsitutionPrinciple;

public class ShapeExample {
	
	static class Rectangle {
		  protected int width, height;

		  public Rectangle() {
		  }

		  public Rectangle(int width, int height) {
		    this.width = width;
		    this.height = height;
		  }

		  public int getWidth() {
		    return width;
		  }

		  public void setWidth(int width) {
		    this.width = width;
		  }

		  public int getHeight() {
		    return height;
		  }

		  public void setHeight(int height) {
		    this.height = height;
		  }

		  public int getArea() { return width*height; }

		  @Override
		  public String toString() {
		    return "Rectangle{" +
		      "width=" + width +
		      ", height=" + height +
		      '}';
		  }
	}
	
	static class Square extends Rectangle
	{
		
	  public Square(int size) {
	    width = height = size;
	  }

	  @Override
	  public void setWidth(int width) {
	    super.setWidth(width);
	    super.setHeight(width);
	  }

	  @Override
	  public void setHeight(int height) {
	    super.setHeight(height);
	    super.setWidth(height);
	  }
	}
	
	static boolean clientMethod(Rectangle r)
	  {
	    r.setWidth(5);
	    r.setHeight(4);
	    return r.getArea()==20;
	  }

	public static void main(String[] args) {
		   Rectangle rc = new Rectangle(2, 3);
		   System.out.println(clientMethod(rc));
		   
		   Rectangle sq = new Square(5);
		   System.out.println(clientMethod(sq));
		   
		   //Solution?
		   
		   // Interface 
		   // Shape - area():int
		   
		   // Classes
		   // Square - setSize(int Size)
		   // Rectangle - setWidth(int width), setHeight(int height)
		   
	}

}
