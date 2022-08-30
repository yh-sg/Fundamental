package interfaceSegregationPrinciple;

public class AllClassesExample {
	class OldPrinter implements IPrinter
	{
		@Override
		public void print(String words) {
			// TODO Auto-generated method stub
		}
	}

	class Photocopier implements IPrinter, IScanner
	{
		@Override
		public void scan(String words) throws Exception {
			// TODO Auto-generated method stub
		}
		
		@Override
		public void print(String words) {
			// TODO Auto-generated method stub
		}
	}
}
