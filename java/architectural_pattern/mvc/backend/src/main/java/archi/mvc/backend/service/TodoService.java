package archi.mvc.backend.service;

import java.util.List;
import java.util.UUID;

import archi.mvc.backend.dto.TodoDto;
import archi.mvc.backend.dto.TodoResponseDto;

public interface TodoService {
    TodoResponseDto createTodo(TodoDto dto);
    List<TodoResponseDto> findTodos();
    TodoResponseDto findTodo(UUID id);
    TodoResponseDto updateTodo(UUID id, TodoDto todo);
    void deleteTodo(UUID id);
    void setCompleteTask(UUID id);
}
