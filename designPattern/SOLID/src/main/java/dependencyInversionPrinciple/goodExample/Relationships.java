package dependencyInversionPrinciple.goodExample;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.javatuples.Triplet;

import dependencyInversionPrinciple.Constants.RELATIONSHIPS;
import dependencyInversionPrinciple.Person;

public class Relationships implements IRelationshipBrowser
{

  // Triplet class requires javatuples
  private List<Triplet<Person, RELATIONSHIPS, Person>> relations = new ArrayList<>();
  
  public List<Person> findAllChildrenOf(String name) {

	    return relations.stream()
	      .filter(x -> Objects.equals(x.getValue0().getName(), name) && x.getValue1() == RELATIONSHIPS.PARENT)
	      .map(Triplet::getValue2)
	      .collect(Collectors.toList());
	  }

  public void addParentAndChild(Person parent, Person child)
  {
    relations.add(new Triplet<>(parent, RELATIONSHIPS.PARENT, child));
    relations.add(new Triplet<>(child, RELATIONSHIPS.CHILD, parent));
  }
}