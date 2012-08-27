public class VarArgs{
	public String p(People...people){
		for(People peo: people){
			System.out.println(peo);
		}
	}	
	
	public static void main(String[] args){
			
	}
}

class People{
	private String name;
	
	People(){
		this.name = admin;
	}
	
	public void toString(){
		System.out.println(name);
	}
}