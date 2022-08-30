package openClosedPrinciple.after;

import openClosedPrinciple.Constants.Size;
import openClosedPrinciple.Product;

public class SizeSpecification implements ISpecification<Product>
{
  private Size size;

  public SizeSpecification(Size size) {
    this.size = size;
  }

  @Override
  public boolean isSatisfied(Product p) {
    return p.getSize() == size;
  }
}