package it.dantar.games.birthday.models;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class HighScoresDto {

	List<HighScoreDto> highscores = new ArrayList<>();

	public List<HighScoreDto> getHighscores() {
		return highscores;
	}

	public HighScoresDto setHighscores(List<HighScoreDto> highscores) {
		this.highscores = highscores;
		return this;
	}

	public HighScoresDto update(HighScoresDto h) {
		Map<String, HighScoreDto> m = this.highscores.stream().collect(Collectors.toMap(f->f.getPlayer(), Function.identity()));
		h.getHighscores().stream()
		.forEach(s -> {
			if (m.containsKey(s.getPlayer())) {
				m.get(s.getPlayer()).update(s);
			} else {
				this.highscores.add(s);
			}
		});
		this.highscores.sort((Comparator<? super HighScoreDto>) new Comparator<HighScoreDto>() {
			@Override
			public int compare(HighScoreDto o1, HighScoreDto o2) {
				return o1.getScore().compareTo(o2.getScore());
			}
		});
		return this;
	}
	
}
