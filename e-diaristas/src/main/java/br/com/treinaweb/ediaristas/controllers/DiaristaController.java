package br.com.treinaweb.ediaristas.controllers;

import br.com.treinaweb.ediaristas.models.Diarista;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/admin/diaristas")
public class DiaristaController {

    @GetMapping("/cadastrar")
    public ModelAndView cadastrar() {
        var modelAndView = new ModelAndView("admin/diaristas/form");
        modelAndView.addObject("diarista", new Diarista());

        return modelAndView;
    }
}
