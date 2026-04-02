package observer;

import java.util.ArrayList;
import java.util.List;

public class StaticsDisplay implements Observer {
    private List<Float> temperatureHistory = new ArrayList<>();

    @Override
    public void update(float temperature, float humidity, float pressure) {
        temperatureHistory.add(temperature);
        display();
    }

    public void display() {
        float sum = 0;
        for (float temp : temperatureHistory) {
            sum += temp;
        }
        float avg = sum / temperatureHistory.size();
        System.out.println("Avg/Max/Min temperature: " + avg + "/" + getMax() + "/" + getMin());
    }

    private float getMax() {
        float max = Float.MIN_VALUE;
        for (float temp : temperatureHistory) {
            if (temp > max) max = temp;
        }

        return max;
    }

    private float getMin() {
        float min = Float.MAX_VALUE;
        for (float temp : temperatureHistory) {
            if (temp < min) min = temp;
        }
        return min;
    }
}
