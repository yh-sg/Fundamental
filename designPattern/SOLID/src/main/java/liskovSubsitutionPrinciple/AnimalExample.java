package liskovSubsitutionPrinciple;

public class AnimalExample {
	
	//Bad example
	
	public class BadBirdExample{
	    public void fly(){}
	}
	public class BadExampleDuck extends BadBirdExample{}
	//Ostrich cannot fly! Breaking LSP principle
	public class BadExampleOstrich extends BadBirdExample{}
	
	//Good Example
	public class Bird{}
	public class FlyingBirds extends Bird{
	    public void fly(){}
	}
	public class Duck extends FlyingBirds{}
	public class Ostrich extends Bird{} 

}
