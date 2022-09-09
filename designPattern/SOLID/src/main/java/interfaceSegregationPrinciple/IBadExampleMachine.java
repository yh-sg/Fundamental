package interfaceSegregationPrinciple;

public interface IBadExampleMachine {
	// Bad example, what if the machine is old and can neither do fax nor scan?
	  void print(String words);
	  void fax(String words) throws Exception;
	  void scan(String words) throws Exception;
	// Solution? Break the interfaces
}
