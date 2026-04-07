package archi.mvc.backend.mapper;

import org.springframework.stereotype.Service;

import archi.mvc.backend.dto.TodoDto;
import archi.mvc.backend.dto.TodoResponseDto;
import archi.mvc.backend.models.Todo;

@Service
public class TodoMapper {
    
    public Todo toTodo(TodoDto dto) {
        Todo todo = new Todo();
        todo.setTask(dto.task());

        return todo;
    }

    public TodoResponseDto toTodoResponseDto(Todo todo) {
        return new TodoResponseDto(
            todo.getId(),
            todo.getTask(),
            todo.getIsCompleted(),
            todo.getCreatedAt(),
            todo.getUpdatedAt()
        );
    }
}
