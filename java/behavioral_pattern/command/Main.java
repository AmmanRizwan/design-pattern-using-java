package command;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Light livingRoomLight = new Light("Living Room");
        Light bedRoomLight = new Light("Bedroom");
        Fan ceilingFan = new Fan("Ceiling");
        TV tv = new TV("Samsung");

        Command livingRoomLightOn = new LightOnCommand(livingRoomLight);
        Command livingRoomLightOff = new LightOffCommand(livingRoomLight);
        Command bedRoomLightOn = new LightOnCommand(bedRoomLight);
        Command bedRoomLightOff = new LightOffCommand(bedRoomLight);
        Command FanOn = new FanOnCommand(ceilingFan);
        Command FanOff = new FanOffCommand(ceilingFan);
        Command TvOn = new TVOnCommand(tv);
        Command TvOff = new TVOffCommand(tv);

        RemoteControl remote = new RemoteControl();

        remote.setCommand(0, livingRoomLightOn, livingRoomLightOff);
        remote.setCommand(1, bedRoomLightOn, bedRoomLightOff);
        remote.setCommand(2, FanOn, FanOff);
        remote.setCommand(3, TvOn, TvOff);

        System.out.println("=== Testing Remote Control ===");
        System.out.println(remote);

        System.out.println("\n--- Pressing Buttons ---");
        remote.onButtonPressed(0);
        remote.offButtonPressed(0);
        remote.onButtonPressed(1);
        remote.onButtonPressed(2);
        remote.onButtonPressed(3);

        System.out.println("\n--- Undo Last Command ---");
        remote.undoButtonPressed();

        System.out.println("\n--- Macro Command (Party Mode) ---");
        List<Command> partyOn = new ArrayList<>();
        partyOn.add(livingRoomLightOn);
        partyOn.add(bedRoomLightOn);
        partyOn.add(TvOn);

        List<Command> partyOff = new ArrayList<>();
        partyOff.add(livingRoomLightOff);
        partyOff.add(bedRoomLightOff);
        partyOff.add(TvOff);

        MacroCommand partyOnMacro = new MacroCommand(partyOn);
        MacroCommand partyOffMacro = new MacroCommand(partyOff);

        remote.setCommand(4, partyOnMacro, partyOffMacro);
        remote.onButtonPressed(4);

        System.out.println("\n--- Turn Off Party Mode ---");
        remote.offButtonPressed(4);
    }
}