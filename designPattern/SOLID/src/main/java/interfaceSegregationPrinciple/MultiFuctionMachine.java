package interfaceSegregationPrinciple;

class MultiFunctionMachine implements IMultiFunctionDevice
{
	  // compose this out of several modules
	  private IPrinter printer;
	  private IScanner scanner;
	  private IFaxMachine faxMach;
	
	  public MultiFunctionMachine(IPrinter printer, IScanner scanner, IFaxMachine faxMach)
	  {
	    this.printer = printer;
	    this.scanner = scanner;
	    this.faxMach = faxMach;
	  }

	@Override
	public void print(String words) {
		printer.print(words);
	}

	@Override
	public void scan(String words) throws Exception {
		scanner.scan(words);
	}
	
	@Override
	public void fax(String words) throws Exception {
		faxMach.fax(words);
	}
}