package openClosedPrinciple.after;

import java.util.List;
import java.util.stream.Stream;

import openClosedPrinciple.Product;

public class BetterFilterService implements IFilter<Product>
{
	@Override
	public Stream<Product> filter(List<Product> items, ISpecification<Product> spec) {
		return items.stream().filter(p -> spec.isSatisfied(p));
	}
}