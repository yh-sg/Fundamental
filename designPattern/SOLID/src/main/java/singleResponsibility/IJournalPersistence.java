package singleResponsibility;

import java.io.IOException;
import java.net.URL;

public interface IJournalPersistence {
	String readFile(String filename) throws IOException;
	void saveToFile(Journal journal, String filename, boolean overwrite) throws IOException;
	
	void load(Journal journal, String filename);
	void load(Journal journal, URL url);
}
