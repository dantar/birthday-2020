package it.dantar.games.birthday.models;

public class HighScoreDto {

	String player;
	Integer score;
	public String getPlayer() {
		return player;
	}
	public HighScoreDto setPlayer(String player) {
		this.player = player;
		return this;
	}
	public Integer getScore() {
		return score;
	}
	public HighScoreDto setScore(Integer score) {
		this.score = score;
		return this;
	}
	public HighScoreDto update(HighScoreDto s) {
		if (s.getScore() < this.getScore()) this.setScore(s.getScore());
		return this;
	}
}
