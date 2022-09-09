package dependencyInversionPrinciple.badExample;

import java.util.List;

import org.javatuples.Triplet;

import dependencyInversionPrinciple.Constants.RELATIONSHIPS;
import dependencyInversionPrinciple.Person;

public class BResearch {
	  public BResearch(BRelationships relationships, String name)
	  {
	    // high-level: find all of john's children
	    List<Triplet<Person, RELATIONSHIPS, Person>> relations = relationships.getRelations();
	    
	    relations.stream().filter(x -> x.getValue0().getName().equals(name) && x.getValue1() == RELATIONSHIPS.PARENT)
	      .forEach(ch -> System.out.println("John has a child called " + ch.getValue2().getName()));
	  }
}
