package com.blog.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    @GetMapping
    public List<Map<String, String>> getArtigosSeculo21() {
        return List.of(
            Map.of(
                "titulo", "Cibersegurança e Privacidade",
                "categoria", "Java Backend",
                "resumo", "Como a linguagem Java protege dados sensíveis contra ataques modernos."
            ),
            Map.of(
                "titulo", "Design Adaptativo em Telas Flexíveis",
                "categoria", "CSS3",
                "resumo", "Desafios de renderização em dispositivos modernos usando CSS."
            )
        );
    }
}
