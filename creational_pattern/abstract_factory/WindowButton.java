package abstract_factory;

public class WindowButton implements Button {
    
    @Override
    public void paint() {
        System.out.println("Windows Buttons");
    }
}
