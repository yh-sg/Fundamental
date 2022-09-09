package dependencyInversionPrinciple.badExample;

import java.util.ArrayList;
import java.util.List;

import org.javatuples.Triplet;

import dependencyInversionPrinciple.Person;
import dependencyInversionPrinciple.Constants.RELATIONSHIPS;

public class BRelationships {
	  // Triplet class requires javatuples
	  private List<Triplet<Person, RELATIONSHIPS, Person>> relations = new ArrayList<>();

	  public List<Triplet<Person, RELATIONSHIPS, Person>> getRelations() {
	    return relations;
	  }

	  public void addParentAndChild(Person parent, Person child)
	  {
	    relations.add(new Triplet<>(parent, RELATIONSHIPS.PARENT, child));
	    relations.add(new Triplet<>(child, RELATIONSHIPS.CHILD, parent));
	  }
}
