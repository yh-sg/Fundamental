package openClosedPrinciple;

import java.util.List;
import java.util.stream.Stream;

import openClosedPrinciple.after.BetterFilterService;
import openClosedPrinciple.after.ColorSpecification;
import openClosedPrinciple.after.ISpecification;
import openClosedPrinciple.after.SizeSpecification;
import openClosedPrinciple.after.TwoSpecification;
import openClosedPrinciple.Constants.Color;
import openClosedPrinciple.Constants.Size;

public class OCP {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	    Product apple = new Product("Apple", Color.GREEN, Size.SMALL);
	    Product tree = new Product("Tree", Color.GREEN, Size.LARGE);
	    Product house = new Product("House", Color.BLUE, Size.LARGE);
	    Product blueBerryTree = new Product("BlueBerryTree", Color.BLUE, Size.LARGE);

	    List<Product> products = List.of(apple, tree, house, blueBerryTree);
	    
	    BetterFilterService bf = new BetterFilterService();
	    System.out.println("Green products:");
	    Stream<Product> allGreenProduct = bf.filter(products, new ColorSpecification(Color.GREEN));
	    allGreenProduct.forEach(p -> System.out.println(" - " + p.getName() + " is green"));

	    System.out.println("Large products:");
	    Stream<Product> allLargeProduct = bf.filter(products, new SizeSpecification(Size.LARGE));
	    allLargeProduct.forEach(p -> System.out.println(" - " + p.getName() + " is large"));
	    
	    System.out.println("Large and blue products:");
	    ISpecification<Product> LargeAndBlueSpec = new TwoSpecification<>(new ColorSpecification(Color.BLUE),new SizeSpecification(Size.LARGE));
	    Stream<Product> allLargeAndBlueProduct = bf.filter(products, LargeAndBlueSpec);
	    allLargeAndBlueProduct.forEach(p -> System.out.println(" - " + p.getName() + " is large and blue"));
	}

}
