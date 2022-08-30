package singleResponsibility;

import java.util.ArrayList;
import java.util.List;

public class Journal implements IJournal {
	
	  private final List<String> entries = new ArrayList<>();

	  private static int count = 0;

	  public void addEntry(String text)
	  {
	    entries.add("" + (++count) + ": " + text);
	  }

	  public void removeEntry(int index)
	  {
	    entries.remove(index);
	  }
	  
	  @Override
	  public String toString() {
	    return String.join(System.lineSeparator(), entries);
	  }

//	  breaking SPR, why? Because Journal purpose is only to add/remove entry. Not for doing persisting for file object
//	  public void save(String filename) throws Exception
//	  {
//	    try (PrintStream out = new PrintStream(filename))
//	    {
//	      out.println(toString());
//	    }
//	  }
}
