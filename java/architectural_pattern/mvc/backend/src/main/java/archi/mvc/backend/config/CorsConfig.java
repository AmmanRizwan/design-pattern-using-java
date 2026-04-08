package archi.mvc.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Value("${cors.methods}")
    private String METHODS;
    @Value("${cors.origin}")
    private String ORIGIN;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
            .addMapping("/**")
            .allowCredentials(true)
            .allowedMethods(METHODS.split(","))
            .allowedOrigins(ORIGIN)
            .allowedHeaders("*")
            .maxAge(3600);
        }

}
