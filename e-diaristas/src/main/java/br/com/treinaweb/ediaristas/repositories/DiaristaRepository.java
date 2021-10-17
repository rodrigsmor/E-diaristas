package br.com.treinaweb.ediaristas.repositories;

import br.com.treinaweb.ediaristas.models.Diarista;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaristaRepository extends JpaRepository<Diarista, Long> {
    Page<Diarista> findByCodigoIbge(String codigoIbge, Pageable pageable);
}