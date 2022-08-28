package openClosedPrinciple.before;

import java.util.List;
import java.util.stream.Stream;

import openClosedPrinciple.Product;
import openClosedPrinciple.Constants.Color;
import openClosedPrinciple.Constants.Size;

public class ProductFilterService {
	  public Stream<Product> filterByColor(List<Product> products, Color color)
	  {
	    return products.stream().filter(p -> p.getColor() == color);
	  }

	  public Stream<Product> filterBySize(List<Product> products, Size size)
	  {
	    return products.stream().filter(p -> p.getSize() == size);
	  }

	  public Stream<Product> filterBySizeAndColor(List<Product> products, Size size, Color color)
	  {
	    return products.stream().filter(p -> p.getSize() == size && p.getColor() == color);
	  }
}
