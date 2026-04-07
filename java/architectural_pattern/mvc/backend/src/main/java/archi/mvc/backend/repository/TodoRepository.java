package archi.mvc.backend.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import archi.mvc.backend.models.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, UUID> {
}
