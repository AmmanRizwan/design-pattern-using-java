package abstract_factory;

public class WindowCheckBox implements CheckBox {
    @Override
    public void paint() {
        System.out.println("Windows CheckBox");
    }
}
