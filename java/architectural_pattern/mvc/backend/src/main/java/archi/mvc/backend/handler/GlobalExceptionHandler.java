package archi.mvc.backend.handler;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, String>> handleIllegalException(IllegalArgumentException e) {
        Map<String, String> error = new HashMap<>();
        error.put("error", e.getMessage());

        return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> globalException(Exception e) {
        Map<String, String> error = new HashMap<>();
        error.put("error", e.getMessage());
        System.out.println(e.getClass());
        System.out.println(e.getCause());

        return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error);
    }
}
