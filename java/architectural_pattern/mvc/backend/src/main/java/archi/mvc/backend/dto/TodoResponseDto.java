package archi.mvc.backend.dto;

import java.util.Date;
import java.util.UUID;

public record TodoResponseDto(
    UUID id,
    String task,
    Boolean is_completed,
    Date createdAt,
    Date updatedAt
) {
}
