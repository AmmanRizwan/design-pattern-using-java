package builder;

public class House {
    private final String foundation;
    private final String walls;
    private final String roof;

    private House(builder builder) {
        this.foundation = builder.foundation;
        this.walls = builder.walls;
        this.roof = builder.roof;
    } 

    public static class builder {
        private String foundation = "Default Foundation";
        private String walls = "Default Walls";
        private String roof = "Default Roof";

        public builder foundation(String foundation) {
            this.foundation = foundation;
            return this;
        }

        public builder walls(String walls) {
            this.walls = walls;
            return this;
        }

        public builder roof(String roof) {
            this.roof = roof;
            return this;
        }

        public House build() {
            return new House(this);
        }
    }

    @Override
    public String toString() {
        return "House with " + foundation + ", " + walls + ", " + roof;
    }
}
