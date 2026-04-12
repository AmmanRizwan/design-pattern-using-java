package archi.mvc.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import archi.mvc.backend.response.ApiResponse;

@RestController
public class HomeController {
    
    @GetMapping("/")
    public ResponseEntity<ApiResponse<String>> home() {
        return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>("Server is running!", null));
    }
}
