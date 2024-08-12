import { Character, Team } from './Team';

describe('Team class', () => {
	let team;
	let character1;
	let character2;

	beforeEach(() => {
		team = new Team();
		character1 = new Character('John', 1);
		character2 = new Character('Jane', 2);
	});

	test('should add a character to the team', () => {
		team.add(character1);
		expect(team.toArray()).toContain(character1);
	});

	test('should not add the same character twice', () => {
		team.add(character1);
		expect(() => team.add(character1)).toThrow('Character is already in the team');
	});

	test('should add multiple characters with addAll', () => {
		team.addAll(character1, character2);
		expect(team.toArray()).toContain(character1);
		expect(team.toArray()).toContain(character2);
	});

	test('toArray should return an array of members', () => {
		team.addAll(character1, character2);
		const membersArray = team.toArray();
		expect(Array.isArray(membersArray)).toBe(true);
		expect(membersArray).toHaveLength(2);
	});
});