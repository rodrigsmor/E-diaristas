package br.com.treinaweb.ediaristas.validators;

import br.com.treinaweb.ediaristas.models.Diarista;
import br.com.treinaweb.ediaristas.services.ViaCepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class CepValidator implements Validator {
    @Autowired
    private ViaCepService viaCepService;

    @Override
    public boolean supports(Class<?> clazz) {
        return Diarista.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        var diarista = (Diarista) target;

        try {
            var cep = diarista.getCep();
            viaCepService.BuscarEnderecoPorCep(cep);
        } catch (RuntimeException e) {
            errors.rejectValue("cep", null, e.getMessage());
        }
    }
}
