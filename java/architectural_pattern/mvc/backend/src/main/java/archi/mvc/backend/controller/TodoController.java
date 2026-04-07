package archi.mvc.backend.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import archi.mvc.backend.dto.TodoDto;
import archi.mvc.backend.dto.TodoResponseDto;
import archi.mvc.backend.response.ApiResponse;
import archi.mvc.backend.service.TodoService;

@RestController
@RequestMapping("/v1/api/todo")
public class TodoController {
    
    @Autowired
    private TodoService service;

    @PostMapping
    public ResponseEntity<ApiResponse<TodoResponseDto>> createTodo(
        @RequestBody TodoDto dto
    ) {
        var data = service.createTodo(dto);
        return ResponseEntity
                        .status(HttpStatus.OK)
                        .body(new ApiResponse<>("Todo created Successfully", data));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<TodoResponseDto>>> findTodos() {
        var data = service.findTodos();
        return ResponseEntity
                        .status(HttpStatus.OK)
                        .body(new ApiResponse<>("Todos fetched Successfully", data));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<TodoResponseDto>> findTodo(
        @PathVariable("id") UUID id 
    ) {
        var data = service.findTodo(id);
        return ResponseEntity
                        .status(HttpStatus.OK)
                        .body(new ApiResponse<>("Todo fetched Successfully", data));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<TodoResponseDto>> updateTodo(
        @PathVariable("id") UUID id,
        @RequestBody TodoDto dto
    ) {
        service.updateTodo(id, dto);
        return ResponseEntity
                        .status(HttpStatus.OK)
                        .body(new ApiResponse<>("Todo updated Successfully", null));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<TodoResponseDto>> deleteTodo(
        @PathVariable("id") UUID id
    ) {
        service.deleteTodo(id);
        return ResponseEntity
                        .status(HttpStatus.OK)
                        .body(new ApiResponse<>("Todo deleted Successfully", null));
    }

    @PutMapping("/completed/{id}")
    public ResponseEntity<ApiResponse<TodoResponseDto>> setCompletedTodo(
        @PathVariable("id") UUID id
    ) {
        service.setCompleteTask(id);
        return ResponseEntity
                        .status(HttpStatus.OK)
                        .body(new ApiResponse<>("Todo completed", null));
    }
}
