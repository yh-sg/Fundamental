package dependencyInversionPrinciple;

import dependencyInversionPrinciple.badExample.BRelationships;
import dependencyInversionPrinciple.badExample.BResearch;
import dependencyInversionPrinciple.goodExample.IRelationshipBrowser;
import dependencyInversionPrinciple.goodExample.Relationships;
import dependencyInversionPrinciple.goodExample.Research;

public class DIP {

	public static void main(String[] args) {
	    Person parent = new Person("John");
	    Person child1 = new Person("Chris");
	    Person child2 = new Person("Matt");

	    // low-level module
	    BRelationships bRelationships = new BRelationships();
	    bRelationships.addParentAndChild(parent, child1);
	    bRelationships.addParentAndChild(parent, child2);
	    
	    new BResearch(bRelationships, "John");
	    
	    // high-level module
	    IRelationshipBrowser relationships = new Relationships();
	    relationships.addParentAndChild(parent, child1);
	    relationships.addParentAndChild(parent, child2);

	    new Research(relationships, "John");
	}

}
