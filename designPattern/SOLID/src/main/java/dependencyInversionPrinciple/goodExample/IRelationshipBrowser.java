package dependencyInversionPrinciple.goodExample;

import java.util.List;

import dependencyInversionPrinciple.Person;

public interface IRelationshipBrowser {
	List<Person> findAllChildrenOf(String name);
	void addParentAndChild(Person parent, Person child);
}
