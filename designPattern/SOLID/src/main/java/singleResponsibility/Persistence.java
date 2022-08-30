package singleResponsibility;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintStream;
import java.net.URL;

public class Persistence implements IJournalPersistence{
	
	public String readFile(String filename) throws IOException {
		try(BufferedReader br = new BufferedReader(new FileReader(filename))) {
		    StringBuilder sb = new StringBuilder();
		    String line = br.readLine();

		    while (line != null) {
		        sb.append(line);
		        sb.append(System.lineSeparator());
		        line = br.readLine();
		    }
		    return sb.toString();
		}
	}
	
	  public void saveToFile(Journal journal, String filename, boolean overwrite) throws IOException
	  {
	    if (overwrite || new File(filename).exists())
	      try (PrintStream out = new PrintStream(filename)) {
	    	  out.println(journal.toString());
	     }
	  }

	  public void load(Journal journal, String filename) {}
	  public void load(Journal journal, URL url) {}
}