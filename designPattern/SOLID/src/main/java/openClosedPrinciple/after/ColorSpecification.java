package openClosedPrinciple.after;

import openClosedPrinciple.Constants.Color;
import openClosedPrinciple.Product;

public class ColorSpecification implements ISpecification<Product>
{
  private Color color;

  public ColorSpecification(Color color) {
    this.color = color;
  }

  @Override
  public boolean isSatisfied(Product p) {
    return p.getColor() == color;
  }
}