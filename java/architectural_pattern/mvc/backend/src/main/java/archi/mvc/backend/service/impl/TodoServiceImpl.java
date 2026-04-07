package archi.mvc.backend.service.impl;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import archi.mvc.backend.dto.TodoDto;
import archi.mvc.backend.dto.TodoResponseDto;
import archi.mvc.backend.mapper.TodoMapper;
import archi.mvc.backend.models.Todo;
import archi.mvc.backend.repository.TodoRepository;
import archi.mvc.backend.service.TodoService;

@Service
public class TodoServiceImpl implements TodoService {
    
    @Autowired
    private TodoMapper mapper;

    @Autowired
    private TodoRepository repository;

    @Override
    public TodoResponseDto createTodo(TodoDto dto) {
        Todo todo = mapper.toTodo(dto);
        Todo save = repository.save(todo);
        return mapper.toTodoResponseDto(save); 
    }

    @Override
    public List<TodoResponseDto> findTodos() {
        return repository
                .findAll()
                .stream()
                .map(mapper::toTodoResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public TodoResponseDto findTodo(UUID id) {
        return repository
                .findById(id)
                .map(mapper::toTodoResponseDto)
                .orElseThrow(() -> new IllegalArgumentException("cannot find the task by id: " + id));
    }

    @Override
    public TodoResponseDto updateTodo(UUID id, TodoDto dto) {
        Todo todo = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("cannot find the task by id: " + id));
        todo.setTask(dto.task());
        repository.save(todo);
        return mapper.toTodoResponseDto(todo);
    }

    @Override
    public void deleteTodo(UUID id) {
        repository.deleteById(id);
    }

    @Override
    public void setCompleteTask(UUID id) {
        Todo todo = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("cannot find the task by id: " + id));
        todo.setIsCompleted(todo.getIsCompleted() ? false : true);
        repository.save(todo);
    }
}
