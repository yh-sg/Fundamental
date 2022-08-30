package singleResponsibility;

public class SPRMain {

	public static void main(String[] args) throws Exception {
	    Journal j = new Journal();
	    j.addEntry("I cried today");
	    j.addEntry("I ate a bug");

	    Persistence p = new Persistence();
	    String filename = args[0];
	    p.saveToFile(j, filename, true);

	    System.out.println(p.readFile(args[0]));
	}

}
