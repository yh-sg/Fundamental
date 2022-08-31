package dependencyInversionPrinciple.goodExample;

import java.util.List;

import dependencyInversionPrinciple.Person;

public class Research {
	  public Research(IRelationshipBrowser browser, String name)
	  {
	    List<Person> children = browser.findAllChildrenOf(name);
	    for (Person child : children)
	      System.out.println(name+" has a child called " + child.getName());
	  }
}
