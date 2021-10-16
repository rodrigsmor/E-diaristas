package br.com.treinaweb.ediaristas.repositories;

import br.com.treinaweb.ediaristas.models.Diarista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaristaRepository extends JpaRepository<Diarista, Long> {
}