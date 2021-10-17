package br.com.treinaweb.ediaristas.controllers;

import br.com.treinaweb.ediaristas.dto.DiaristaPagedResponse;
import br.com.treinaweb.ediaristas.repositories.DiaristaRepository;
import br.com.treinaweb.ediaristas.services.ViaCepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/diaristas-cidade")
public class DiaristaRestController {

    @Autowired
    private DiaristaRepository diaristaRepository;

    @Autowired
    private ViaCepService viaCepService;

    @GetMapping
    public DiaristaPagedResponse buscarDiaristasPorCep(@RequestParam String cep) {
        var endereco = viaCepService.BuscarEnderecoPorCep(cep);
        var codigoIbge = endereco.getIbge();

        var pageable = PageRequest.of(0, 6);
        var diaristas = diaristaRepository.findByCodigoIbge(codigoIbge, pageable);

        var quantidadeDiaristas =
                diaristas.getTotalElements() > 6
                        ? diaristas.getTotalElements() - 6
                        : 0;

        return new DiaristaPagedResponse(diaristas.getContent(), quantidadeDiaristas);
    }
}
