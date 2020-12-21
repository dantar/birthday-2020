package it.dantar.games.birthday.beans;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.dantar.games.birthday.models.HighScoresDto;

@RestController
@CrossOrigin
public class BirthdayController {

	private HighScoresDto highscores = new HighScoresDto();

	@GetMapping("/alive")
	public Boolean alive() {
		return true;
	}

	@GetMapping("/highscores")
	public HighScoresDto getHighscores() {
		return this.highscores;
	}

	@PostMapping("/highscores")
	public HighScoresDto postHighscores(@RequestBody HighScoresDto highscores) {
		return this.highscores.update(highscores);
	}

}
